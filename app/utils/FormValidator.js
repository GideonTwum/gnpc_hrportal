// Form Validation Utility for GNPC Onboarding Forms

export class FormValidator {
  // Validate all required fields for GNPC onboarding
  static validateOnboardingForm(formData) {
    const errors = []

    // Personal Details Validation
    if (!formData.fullName?.trim()) {
      errors.push('Full Name is required')
    }
    if (!formData.gnpcId?.trim()) {
      errors.push('GNPC ID is required')
    }
    if (!formData.dateOfBirth) {
      errors.push('Date of Birth is required')
    }
    if (!formData.placeOfBirth?.trim()) {
      errors.push('Place of Birth is required')
    }
    if (!formData.nationality?.trim()) {
      errors.push('Nationality is required')
    }
    if (!formData.religion?.trim()) {
      errors.push('Religion is required')
    }
    if (!formData.maritalStatus?.trim()) {
      errors.push('Marital Status is required')
    }

    // Educational Background Validation
    if (!formData.institution1?.trim()) {
      errors.push('At least one educational institution is required')
    }
    if (!formData.institution1Start) {
      errors.push('Start date for Institution 1 is required')
    }
    if (!formData.institution1End) {
      errors.push('End date for Institution 1 is required')
    }

    // Internship Details Validation
    if (!formData.startDate) {
      errors.push('Internship start date is required')
    }
    if (!formData.endDate) {
      errors.push('Internship end date is required')
    }
    if (!formData.department?.trim()) {
      errors.push('Division/Department is required')
    }
    if (!formData.institution?.trim()) {
      errors.push('Institution is required')
    }
    if (!formData.levelProgramme?.trim()) {
      errors.push('Level & Programme is required')
    }
    if (!formData.internshipDuration?.trim()) {
      errors.push('Internship duration is required')
    }

    // Contact Information Validation
    if (!formData.residentialAddress?.trim()) {
      errors.push('Present residential address is required')
    }
    if (!formData.mobileNumber?.trim()) {
      errors.push('Mobile number is required')
    }

    // Language Validation
    if (!formData.language1Name?.trim()) {
      errors.push('At least one language is required')
    }
    if (!formData.language1Spoken?.trim()) {
      errors.push('Spoken proficiency for Language 1 is required')
    }
    if (!formData.language1Written?.trim()) {
      errors.push('Written proficiency for Language 1 is required')
    }
    if (!formData.language1Read?.trim()) {
      errors.push('Reading proficiency for Language 1 is required')
    }

    // Family Details Validation (at least one contact required)
    const hasFamilyContact = formData.fatherName?.trim() || 
                           formData.motherName?.trim() || 
                           formData.guardianName?.trim()
    
    if (!hasFamilyContact) {
      errors.push('At least one family contact (Father, Mother, or Guardian) is required')
    }

    // Bank Details Validation
    if (!formData.accountName?.trim()) {
      errors.push('Account name is required')
    }
    if (!formData.bankName?.trim()) {
      errors.push('Bank name is required')
    }
    if (!formData.branch?.trim()) {
      errors.push('Bank branch is required')
    }
    if (!formData.accountNumber?.trim()) {
      errors.push('Account number is required')
    }

    // Confidentiality Agreement Validation
    if (!formData.confidentialityAgreed) {
      errors.push('Confidentiality agreement must be agreed to')
    }
    if (!formData.declarationAgreed) {
      errors.push('Declaration must be agreed to')
    }
    if (!formData.termsAgreed) {
      errors.push('Terms and conditions must be agreed to')
    }
    if (!formData.digitalSignature?.trim()) {
      errors.push('Digital signature is required')
    }
    if (!formData.signatureDate) {
      errors.push('Signature date is required')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  // Validate specific sections
  static validatePersonalDetails(formData) {
    const errors = []
    
    if (!formData.fullName?.trim()) errors.push('Full Name is required')
    if (!formData.gnpcId?.trim()) errors.push('GNPC ID is required')
    if (!formData.dateOfBirth) errors.push('Date of Birth is required')
    if (!formData.placeOfBirth?.trim()) errors.push('Place of Birth is required')
    if (!formData.nationality?.trim()) errors.push('Nationality is required')
    if (!formData.religion?.trim()) errors.push('Religion is required')
    if (!formData.maritalStatus?.trim()) errors.push('Marital Status is required')
    
    return { isValid: errors.length === 0, errors }
  }

  static validateEducationalBackground(formData) {
    const errors = []
    
    if (!formData.institution1?.trim()) errors.push('At least one educational institution is required')
    if (!formData.institution1Start) errors.push('Start date for Institution 1 is required')
    if (!formData.institution1End) errors.push('End date for Institution 1 is required')
    
    return { isValid: errors.length === 0, errors }
  }

  static validateInternshipDetails(formData) {
    const errors = []
    
    if (!formData.startDate) errors.push('Internship start date is required')
    if (!formData.endDate) errors.push('Internship end date is required')
    if (!formData.department?.trim()) errors.push('Division/Department is required')
    if (!formData.residentialAddress?.trim()) errors.push('Present residential address is required')
    if (!formData.mobileNumber?.trim()) errors.push('Mobile number is required')
    
    return { isValid: errors.length === 0, errors }
  }

  static validateLanguages(formData) {
    const errors = []
    
    if (!formData.language1Name?.trim()) errors.push('At least one language is required')
    if (!formData.language1Spoken?.trim()) errors.push('Spoken proficiency for Language 1 is required')
    if (!formData.language1Written?.trim()) errors.push('Written proficiency for Language 1 is required')
    if (!formData.language1Read?.trim()) errors.push('Reading proficiency for Language 1 is required')
    
    return { isValid: errors.length === 0, errors }
  }

  static validateFamilyDetails(formData) {
    const errors = []
    
    const hasFamilyContact = formData.fatherName?.trim() || 
                           formData.motherName?.trim() || 
                           formData.guardianName?.trim()
    
    if (!hasFamilyContact) {
      errors.push('At least one family contact (Father, Mother, or Guardian) is required')
    }
    
    return { isValid: errors.length === 0, errors }
  }

  static validateBankDetails(formData) {
    const errors = []
    
    if (!formData.accountName?.trim()) errors.push('Account name is required')
    if (!formData.bankName?.trim()) errors.push('Bank name is required')
    if (!formData.branch?.trim()) errors.push('Bank branch is required')
    if (!formData.accountNumber?.trim()) errors.push('Account number is required')
    
    return { isValid: errors.length === 0, errors }
  }

  static validateConfidentialityAgreement(formData) {
    const errors = []
    
    if (!formData.confidentialityAgreed) errors.push('Confidentiality agreement must be agreed to')
    if (!formData.declarationAgreed) errors.push('Declaration must be agreed to')
    if (!formData.termsAgreed) errors.push('Terms and conditions must be agreed to')
    if (!formData.digitalSignature?.trim()) errors.push('Digital signature is required')
    if (!formData.signatureDate) errors.push('Signature date is required')
    
    return { isValid: errors.length === 0, errors }
  }

  // Validate document completion
  static validateDocuments(documents) {
    const requiredDocuments = [
      'passportPicture',
      'personalInfo',
      'academicRecords',
      'idDocuments',
      'medicalForm',
      'bankDetails',
      'emergencyContact'
    ]

    const missingDocuments = requiredDocuments.filter(doc => !documents[doc])
    
    return {
      isValid: missingDocuments.length === 0,
      missingDocuments,
      completionPercentage: ((requiredDocuments.length - missingDocuments.length) / requiredDocuments.length) * 100
    }
  }

  // Format validation errors for display
  static formatValidationErrors(errors) {
    if (errors.length === 0) return ''
    
    return errors.map((error, index) => `${index + 1}. ${error}`).join('\n')
  }

  // Check if form is ready for submission
  static isFormReadyForSubmission(formData) {
    const validation = this.validateOnboardingForm(formData)
    const documentValidation = this.validateDocuments(formData.documents || {})
    
    return {
      isValid: validation.isValid && documentValidation.isValid,
      formErrors: validation.errors,
      documentErrors: documentValidation.missingDocuments,
      completionPercentage: documentValidation.completionPercentage
    }
  }

  // Generate GNPC ID format
  static generateGNPCId() {
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `GNPC${timestamp}${random}`
  }

  // Validate GNPC ID format
  static validateGNPCId(gnpcId) {
    const gnpcIdPattern = /^GNPC\d{9}$/
    return gnpcIdPattern.test(gnpcId)
  }

  // Validate phone number format (Ghana)
  static validatePhoneNumber(phone) {
    const phonePattern = /^(\+233|0)[2-9]\d{8}$/
    return phonePattern.test(phone)
  }

  // Validate email format
  static validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  // Validate date format
  static validateDate(date) {
    if (!date) return false
    const dateObj = new Date(date)
    return dateObj instanceof Date && !isNaN(dateObj)
  }

  // Check if end date is after start date
  static validateDateRange(startDate, endDate) {
    if (!startDate || !endDate) return false
    const start = new Date(startDate)
    const end = new Date(endDate)
    return end > start
  }
}

export default FormValidator 