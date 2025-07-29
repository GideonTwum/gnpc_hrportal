// Onboarding Service - Handles data operations for onboarding management

const STORAGE_KEY = 'onboardingData'

export class OnboardingService {
  // Get all onboarding data
  static getAllOnboardingData() {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error('Error loading onboarding data:', error)
      return []
    }
  }

  // Save onboarding data
  static saveOnboardingData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      return true
    } catch (error) {
      console.error('Error saving onboarding data:', error)
      return false
    }
  }

  // Add new onboarding record
  static addOnboardingRecord(record) {
    try {
      const existingData = this.getAllOnboardingData()
      const newRecord = {
        ...record,
        id: Date.now(),
        submittedDate: new Date().toISOString().split('T')[0],
        status: 'pending'
      }
      const updatedData = [...existingData, newRecord]
      this.saveOnboardingData(updatedData)
      return newRecord
    } catch (error) {
      console.error('Error adding onboarding record:', error)
      return null
    }
  }

  // Update onboarding record
  static updateOnboardingRecord(id, updates) {
    try {
      const existingData = this.getAllOnboardingData()
      const updatedData = existingData.map(record => 
        record.id === id ? { ...record, ...updates } : record
      )
      this.saveOnboardingData(updatedData)
      return true
    } catch (error) {
      console.error('Error updating onboarding record:', error)
      return false
    }
  }

  // Delete onboarding record
  static deleteOnboardingRecord(id) {
    try {
      const existingData = this.getAllOnboardingData()
      const updatedData = existingData.filter(record => record.id !== id)
      this.saveOnboardingData(updatedData)
      return true
    } catch (error) {
      console.error('Error deleting onboarding record:', error)
      return false
    }
  }

  // Get onboarding record by ID
  static getOnboardingRecordById(id) {
    try {
      const existingData = this.getAllOnboardingData()
      return existingData.find(record => record.id === id) || null
    } catch (error) {
      console.error('Error getting onboarding record:', error)
      return null
    }
  }

  // Search onboarding records
  static searchOnboardingRecords(searchTerm, filters = {}) {
    try {
      const existingData = this.getAllOnboardingData()
      let filteredData = existingData

      // Apply search filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        filteredData = filteredData.filter(record => 
          record.applicantName.toLowerCase().includes(term) ||
          record.email.toLowerCase().includes(term) ||
          record.institution.toLowerCase().includes(term) ||
          record.position.toLowerCase().includes(term)
        )
      }

      // Apply status filter
      if (filters.status && filters.status !== 'all') {
        filteredData = filteredData.filter(record => record.status === filters.status)
      }

      // Apply date range filter
      if (filters.startDate && filters.endDate) {
        filteredData = filteredData.filter(record => {
          const submittedDate = new Date(record.submittedDate)
          const startDate = new Date(filters.startDate)
          const endDate = new Date(filters.endDate)
          return submittedDate >= startDate && submittedDate <= endDate
        })
      }

      return filteredData
    } catch (error) {
      console.error('Error searching onboarding records:', error)
      return []
    }
  }

  // Get statistics
  static getOnboardingStats() {
    try {
      const existingData = this.getAllOnboardingData()
      const stats = {
        total: existingData.length,
        pending: existingData.filter(record => record.status === 'pending').length,
        inProgress: existingData.filter(record => record.status === 'in_progress').length,
        completed: existingData.filter(record => record.status === 'completed').length,
        thisMonth: existingData.filter(record => {
          const submittedDate = new Date(record.submittedDate)
          const now = new Date()
          return submittedDate.getMonth() === now.getMonth() && 
                 submittedDate.getFullYear() === now.getFullYear()
        }).length
      }
      return stats
    } catch (error) {
      console.error('Error getting onboarding stats:', error)
      return {
        total: 0,
        pending: 0,
        inProgress: 0,
        completed: 0,
        thisMonth: 0
      }
    }
  }

  // Export data to CSV
  static exportToCSV() {
    try {
      const data = this.getAllOnboardingData()
      if (data.length === 0) return null

      const headers = [
        'ID',
        'Applicant Name',
        'Email',
        'Phone',
        'Institution',
        'Program',
        'Position',
        'Department',
        'Status',
        'Submitted Date',
        'Start Date',
        'Notes'
      ]

      const csvContent = [
        headers.join(','),
        ...data.map(record => [
          record.id,
          `"${record.applicantName}"`,
          `"${record.email}"`,
          `"${record.phone}"`,
          `"${record.institution}"`,
          `"${record.program}"`,
          `"${record.position}"`,
          `"${record.department}"`,
          record.status,
          record.submittedDate,
          record.startDate,
          `"${record.notes || ''}"`
        ].join(','))
      ].join('\n')

      return csvContent
    } catch (error) {
      console.error('Error exporting to CSV:', error)
      return null
    }
  }

  // Import data from CSV
  static importFromCSV(csvContent) {
    try {
      const lines = csvContent.split('\n')
      const headers = lines[0].split(',').map(h => h.trim())
      const data = []

      for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim()) {
          const values = lines[i].split(',').map(v => v.trim().replace(/^"|"$/g, ''))
          const record = {}
          
          headers.forEach((header, index) => {
            record[header.toLowerCase().replace(/\s+/g, '')] = values[index] || ''
          })

          data.push(record)
        }
      }

      this.saveOnboardingData(data)
      return data.length
    } catch (error) {
      console.error('Error importing from CSV:', error)
      return 0
    }
  }

  // Validate onboarding record
  static validateOnboardingRecord(record) {
    const errors = []

    if (!record.applicantName?.trim()) {
      errors.push('Applicant name is required')
    }

    if (!record.email?.trim()) {
      errors.push('Email is required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(record.email)) {
      errors.push('Invalid email format')
    }

    if (!record.institution?.trim()) {
      errors.push('Institution is required')
    }

    if (!record.position?.trim()) {
      errors.push('Position is required')
    }

    if (!record.startDate?.trim()) {
      errors.push('Start date is required')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }
}

export default OnboardingService 