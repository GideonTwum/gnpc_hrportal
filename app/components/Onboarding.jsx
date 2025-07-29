'use client'
import React, { useState, useEffect } from 'react'
import { 
  Upload, 
  FileText, 
  Download, 
  Printer, 
  Search, 
  Filter, 
  Eye, 
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  GraduationCap,
  CheckCircle,
  XCircle,
  Clock,
  Plus,
  Trash2,
  Edit3,
  FileImage,
  CreditCard,
  Users,
  Globe,
  BookOpen
} from 'lucide-react'
import { toast } from 'react-hot-toast'

const Onboarding = () => {
  const [onboardingData, setOnboardingData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedApplicant, setSelectedApplicant] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  // Sample onboarding data structure based on the actual form
  const sampleOnboardingData = [
    {
      id: 1,
      applicantName: "Sarah Baddoo",
      email: "sarah.baddoo@email.com",
      phone: "+233 24 123 4567",
      gnpcId: "GNPC001",
      dateOfBirth: "1998-05-15",
      placeOfBirth: "Accra",
      nationality: "Ghanaian",
      religion: "Christian",
      maritalStatus: "Single",
      institution: "University of Ghana",
      levelProgramme: "Computer Science - Level 400",
      internshipDuration: "6 months",
      position: "Software Development Intern",
      department: "IT Department",
      startDate: "2024-06-01",
      endDate: "2024-12-01",
      status: "completed",
      submittedDate: "2024-05-20",
      residentialAddress: "123 Main Street, Accra",
      mobileNumber: "+233 24 123 4567",
      
      // Educational Background
      institution1: "University of Ghana",
      institution1Start: "2020-09-01",
      institution1End: "2024-05-15",
      institution2: "Accra Academy",
      institution2Start: "2017-09-01",
      institution2End: "2020-06-30",
      institution3: "St. Mary's JHS",
      institution3Start: "2014-09-01",
      institution3End: "2017-06-30",
      
      // Languages
      language1Name: "English",
      language1Spoken: "Excellent",
      language1Written: "Excellent",
      language1Read: "Excellent",
      language2Name: "Twi",
      language2Spoken: "Very Good",
      language2Written: "Good",
      language2Read: "Very Good",
      
      // Family Details
      fatherName: "John Baddoo",
      fatherContact: "+233 20 123 4567",
      motherName: "Mary Baddoo",
      motherContact: "+233 26 123 4567",
      guardianName: "Uncle James Baddoo",
      guardianContact: "+233 24 987 6543",
      
      // Bank Details
      accountName: "Sarah Baddoo",
      bankName: "Ghana Commercial Bank",
      branch: "Accra Central",
      accountNumber: "1234567890",
      divisionDepartment2: "IT Department",
      
      // Documents
      documents: {
        passportPicture: "passport_sarahbaddoo.jpg",
        personalInfo: "personal_info_sarahbaddoo.pdf",
        academicRecords: "academic_records_sarahbaddoo.pdf",
        idDocuments: "id_documents_sarahbaddoo.pdf",
        medicalForm: "medical_form_sarah.pdf",
        bankDetails: "bank_details_sarah.pdf",
        emergencyContact: "emergency_contact_sarah.pdf"
      },
      
      // Confidentiality Agreement
      confidentialityAgreed: true,
      declarationAgreed: true,
      termsAgreed: true,
      digitalSignature: "Sarah Johnson",
      signatureDate: "2024-05-20",
      
      notes: "All documents submitted and verified. Ready for onboarding."
    },
    {
      id: 2,
      applicantName: "Michael Osei",
      email: "michael.osei@email.com",
      phone: "+233 20 987 6543",
      gnpcId: "GNPC002",
      dateOfBirth: "1999-03-20",
      placeOfBirth: "Kumasi",
      nationality: "Ghanaian",
      religion: "Christian",
      maritalStatus: "Single",
      institution: "Kwame Nkrumah University",
      levelProgramme: "Engineering - Level 300",
      internshipDuration: "3 months",
      position: "Engineering Intern",
      department: "Engineering Department",
      startDate: "2024-06-15",
      endDate: "2024-09-15",
      status: "pending",
      submittedDate: "2024-05-18",
      residentialAddress: "456 Oak Street, Kumasi",
      mobileNumber: "+233 20 987 6543",
      
      // Educational Background
      institution1: "Kwame Nkrumah University",
      institution1Start: "2021-09-01",
      institution1End: "2025-05-15",
      institution2: "Prempeh College",
      institution2Start: "2018-09-01",
      institution2End: "2021-06-30",
      institution3: "St. Peter's JHS",
      institution3Start: "2015-09-01",
      institution3End: "2018-06-30",
      
      // Languages
      language1Name: "English",
      language1Spoken: "Excellent",
      language1Written: "Excellent",
      language1Read: "Excellent",
      language2Name: "Twi",
      language2Spoken: "Excellent",
      language2Written: "Very Good",
      language2Read: "Excellent",
      
      // Family Details
      fatherName: "Kwame Osei",
      fatherContact: "+233 24 456 7890",
      motherName: "Abena Osei",
      motherContact: "+233 26 456 7890",
      guardianName: "",
      guardianContact: "",
      
      // Bank Details
      accountName: "Michael Osei",
      bankName: "Ecobank Ghana",
      branch: "Kumasi Main",
      accountNumber: "0987654321",
      divisionDepartment2: "Analytics Team",
      
      // Documents
      documents: {
        passportPicture: "passport_michael.jpg",
        personalInfo: "personal_info_michael.pdf",
        academicRecords: "academic_records_michael.pdf",
        idDocuments: "id_documents_michael.pdf",
        medicalForm: null,
        bankDetails: null,
        emergencyContact: "emergency_contact_michael.pdf"
      },
      
      // Confidentiality Agreement
      confidentialityAgreed: true,
      declarationAgreed: true,
      termsAgreed: true,
      digitalSignature: "Michael Osei",
      signatureDate: "2024-05-18",
      
      notes: "Missing medical form and bank details. Follow up required."
    },
    {
      id: 3,
      applicantName: "Grace Addo",
      email: "grace.addo@email.com",
      phone: "+233 26 456 7890",
      gnpcId: "GNPC003",
      dateOfBirth: "1997-11-10",
      placeOfBirth: "Cape Coast",
      nationality: "Ghanaian",
      religion: "Christian",
      maritalStatus: "Single",
      institution: "Ashesi University",
      levelProgramme: "Business Administration - Level 400",
      internshipDuration: "6 months",
      position: "Marketing Intern",
      department: "Marketing Department",
      startDate: "2024-05-20",
      endDate: "2024-11-20",
      status: "in_progress",
      submittedDate: "2024-05-10",
      residentialAddress: "789 Pine Street, Cape Coast",
      mobileNumber: "+233 26 456 7890",
      
      // Educational Background
      institution1: "Ashesi University",
      institution1Start: "2020-09-01",
      institution1End: "2024-05-15",
      institution2: "Wesley Girls High School",
      institution2Start: "2017-09-01",
      institution2End: "2020-06-30",
      institution3: "St. Augustine JHS",
      institution3Start: "2014-09-01",
      institution3End: "2017-06-30",
      
      // Languages
      language1Name: "English",
      language1Spoken: "Excellent",
      language1Written: "Excellent",
      language1Read: "Excellent",
      language2Name: "Fante",
      language2Spoken: "Very Good",
      language2Written: "Good",
      language2Read: "Very Good",
      
      // Family Details
      fatherName: "Kofi Addo",
      fatherContact: "+233 20 789 0123",
      motherName: "Efua Addo",
      motherContact: "+233 24 789 0123",
      guardianName: "Auntie Comfort Addo",
      guardianContact: "+233 26 789 0123",
      
      // Bank Details
      accountName: "Grace Addo",
      bankName: "Standard Chartered Bank",
      branch: "Cape Coast",
      accountNumber: "1122334455",
      divisionDepartment2: "Marketing Department",
      
      // Documents
      documents: {
        passportPicture: "passport_grace.jpg",
        personalInfo: "personal_info_grace.pdf",
        academicRecords: null,
        idDocuments: "id_documents_grace.pdf",
        medicalForm: "medical_form_grace.pdf",
        bankDetails: "bank_details_grace.pdf",
        emergencyContact: null
      },
      
      // Confidentiality Agreement
      confidentialityAgreed: true,
      declarationAgreed: true,
      termsAgreed: true,
      digitalSignature: "Grace Addo",
      signatureDate: "2024-05-10",
      
      notes: "Academic records and emergency contact pending."
    }
  ]

  useEffect(() => {
    // Load data from localStorage or use sample data
    const storedData = localStorage.getItem('onboardingData')
    if (storedData) {
      setOnboardingData(JSON.parse(storedData))
    } else {
      setOnboardingData(sampleOnboardingData)
      localStorage.setItem('onboardingData', JSON.stringify(sampleOnboardingData))
    }
  }, [])

  useEffect(() => {
    filterData()
  }, [onboardingData, searchTerm, statusFilter])

  const filterData = () => {
    let filtered = onboardingData.filter(applicant => {
      const matchesSearch = applicant.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           applicant.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           applicant.gnpcId.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = statusFilter === 'all' || applicant.status === statusFilter
      
      return matchesSearch && matchesStatus
    })
    setFilteredData(filtered)
  }

  const handleFileUpload = (event) => {
    const files = event.target.files
    if (files.length === 0) return

    setIsUploading(true)
    
    // Simulate file upload process
    setTimeout(() => {
      const newApplicant = {
        id: Date.now(),
        applicantName: "New Applicant",
        email: "new.applicant@email.com",
        phone: "+233 XX XXX XXXX",
        gnpcId: "GNPC" + Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
        dateOfBirth: "YYYY-MM-DD",
        placeOfBirth: "Place of Birth",
        nationality: "Ghanaian",
        religion: "Religion",
        maritalStatus: "Single",
        institution: "Institution Name",
        levelProgramme: "Program - Level",
        internshipDuration: "Duration",
        position: "Intern Position",
        department: "Department",
        startDate: "YYYY-MM-DD",
        endDate: "YYYY-MM-DD",
        status: "pending",
        submittedDate: new Date().toISOString().split('T')[0],
        residentialAddress: "Residential Address",
        mobileNumber: "+233 XX XXX XXXX",
        
        // Educational Background
        institution1: "",
        institution1Start: "",
        institution1End: "",
        institution2: "",
        institution2Start: "",
        institution2End: "",
        institution3: "",
        institution3Start: "",
        institution3End: "",
        
        // Languages
        language1Name: "",
        language1Spoken: "",
        language1Written: "",
        language1Read: "",
        language2Name: "",
        language2Spoken: "",
        language2Written: "",
        language2Read: "",
        
        // Family Details
        fatherName: "",
        fatherContact: "",
        motherName: "",
        motherContact: "",
        guardianName: "",
        guardianContact: "",
        
        // Bank Details
        accountName: "",
        bankName: "",
        branch: "",
        accountNumber: "",
        divisionDepartment2: "",
        
        // Documents
        documents: {
          passportPicture: files[0]?.name || "uploaded_file.pdf",
          personalInfo: null,
          academicRecords: null,
          idDocuments: null,
          medicalForm: null,
          bankDetails: null,
          emergencyContact: null
        },
        
        // Confidentiality Agreement
        confidentialityAgreed: false,
        declarationAgreed: false,
        termsAgreed: false,
        digitalSignature: "",
        signatureDate: "",
        
        notes: "New application uploaded. Review required."
      }

      const updatedData = [...onboardingData, newApplicant]
      setOnboardingData(updatedData)
      localStorage.setItem('onboardingData', JSON.stringify(updatedData))
      setIsUploading(false)
      toast.success('Onboarding file uploaded successfully!')
    }, 2000)
  }

  const updateStatus = (id, newStatus) => {
    const updatedData = onboardingData.map(applicant => 
      applicant.id === id ? { ...applicant, status: newStatus } : applicant
    )
    setOnboardingData(updatedData)
    localStorage.setItem('onboardingData', JSON.stringify(updatedData))
    toast.success(`Status updated to ${newStatus}`)
  }

  const deleteApplicant = (id) => {
    const updatedData = onboardingData.filter(applicant => applicant.id !== id)
    setOnboardingData(updatedData)
    localStorage.setItem('onboardingData', JSON.stringify(updatedData))
    toast.success('Applicant removed successfully')
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'in_progress': return 'bg-yellow-100 text-yellow-800'
      case 'pending': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'in_progress': return <Clock className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const printApplicant = (applicant) => {
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <html>
        <head>
          <title>GNPC Intern Onboarding Forms - ${applicant.applicantName}</title>
          <style>
            @page {
              size: A4;
              margin: 1cm;
            }
            body { 
              font-family: 'Times New Roman', serif; 
              margin: 0; 
              padding: 0;
              font-size: 12px;
              line-height: 1.4;
            }
            .form-page {
              page-break-after: always;
              margin-bottom: 20px;
            }
            .form-page:last-child {
              page-break-after: avoid;
            }
            .header {
              background-color: #2c3e50;
              color: white;
              padding: 10px 0;
              text-align: center;
              margin-bottom: 20px;
            }
            .gnpc-logo {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .company-name {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .form-title {
              font-size: 16px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .passport-box {
              position: absolute;
              top: 20px;
              right: 20px;
              width: 120px;
              height: 150px;
              border: 2px solid #000;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #f8f9fa;
              font-size: 10px;
              text-align: center;
            }
            .form-content {
              margin-top: 20px;
              position: relative;
            }
            .section {
              margin-bottom: 15px;
            }
            .section-title {
              font-weight: bold;
              text-decoration: underline;
              margin-bottom: 10px;
              font-size: 14px;
            }
            .field-row {
              display: flex;
              margin-bottom: 8px;
              align-items: center;
            }
            .field-label {
              font-weight: bold;
              min-width: 200px;
              margin-right: 10px;
            }
            .field-value {
              flex: 1;
              border-bottom: 1px dotted #000;
              min-height: 20px;
              padding-left: 5px;
            }
            .table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 15px;
            }
            .table th, .table td {
              border: 1px solid #000;
              padding: 8px;
              text-align: left;
            }
            .table th {
              background-color: #f8f9fa;
              font-weight: bold;
            }
            .signature-section {
              margin-top: 30px;
              display: flex;
              justify-content: space-between;
            }
            .signature-box {
              width: 45%;
            }
            .signature-line {
              border-bottom: 1px solid #000;
              min-height: 30px;
              margin-bottom: 5px;
            }
            .signature-label {
              font-size: 10px;
              text-align: center;
            }
            .remarks-section {
              margin-top: 20px;
              border: 1px solid #000;
              padding: 10px;
            }
            .remarks-title {
              font-weight: bold;
              margin-bottom: 10px;
            }
            .remarks-lines {
              min-height: 60px;
            }
            .confidentiality-text {
              text-align: justify;
              margin-bottom: 20px;
              line-height: 1.6;
            }
            .note {
              font-weight: bold;
              text-align: center;
              margin-top: 20px;
              font-size: 11px;
            }
            @media print {
              body { margin: 0; }
              .form-page { page-break-after: always; }
              .form-page:last-child { page-break-after: avoid; }
            }
          </style>
        </head>
        <body>
          <!-- Page 1: Personal Details Form -->
          <div class="form-page">
            <div class="header">
              <div class="gnpc-logo">GNPC</div>
              <div class="company-name">GHANA NATIONAL PETROLEUM CORPORATION</div>
              <div class="form-title">PERSONAL DETAILS - INTERN</div>
            </div>
            
            <div class="passport-box">
              Passport Picture here
            </div>
            
            <div class="form-content">
              <!-- Personal Details Section -->
              <div class="section">
                <div class="field-row">
                  <div class="field-label">1. Full Name:</div>
                  <div class="field-value">${applicant.applicantName}</div>
                </div>
                <div style="font-size: 10px; margin-left: 200px; margin-bottom: 10px;">Surname First - (Block letters)</div>
                
                <div class="field-row">
                  <div class="field-label">2. GNPC ID No.:</div>
                  <div class="field-value">${applicant.gnpcId}</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">3. Date of Birth:</div>
                  <div class="field-value">${applicant.dateOfBirth}</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">4. Place of Birth:</div>
                  <div class="field-value">${applicant.placeOfBirth}</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">5. Nationality:</div>
                  <div class="field-value">${applicant.nationality}</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">6. Religion:</div>
                  <div class="field-value">${applicant.religion}</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">7. Marital Status:</div>
                  <div class="field-value">${applicant.maritalStatus}</div>
                </div>
              </div>
              
              <!-- Educational Background Section -->
              <div class="section">
                <div class="section-title">8. Educational Background:</div>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Institution</th>
                      <th>Programme of Study</th>
                      <th>Start/End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${applicant.institution1}</td>
                      <td>${applicant.levelProgramme}</td>
                      <td>${applicant.institution1Start} - ${applicant.institution1End}</td>
                    </tr>
                    <tr>
                      <td>${applicant.institution2}</td>
                      <td></td>
                      <td>${applicant.institution2Start} - ${applicant.institution2End}</td>
                    </tr>
                    <tr>
                      <td>${applicant.institution3}</td>
                      <td></td>
                      <td>${applicant.institution3Start} - ${applicant.institution3End}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <!-- Internship Details Section -->
              <div class="section">
                <div class="field-row">
                  <div class="field-label">9. Period of Internship:</div>
                  <div class="field-value">${applicant.startDate} - ${applicant.endDate}</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">10. Division/Department:</div>
                  <div class="field-value">${applicant.department}</div>
                </div>
              </div>
              
              <!-- Contact Information Section -->
              <div class="section">
                <div class="field-row">
                  <div class="field-label">11. (a) Present Residential Address:</div>
                  <div class="field-value">${applicant.residentialAddress}</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">11. (b) Mobile Number(s):</div>
                  <div class="field-value">${applicant.mobileNumber}</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">12. Postal Address:</div>
                  <div class="field-value">${applicant.residentialAddress}</div>
                </div>
              </div>
              
              <!-- Languages Section -->
              <div class="section">
                <div class="section-title">13. Languages:</div>
                <div style="font-size: 10px; margin-bottom: 10px;">[*] Indicate: EXCELLENT; VERY GOOD; GOOD; FAIR</div>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Languages</th>
                      <th>Spoken [*]</th>
                      <th>Written [*]</th>
                      <th>Read [*]</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${applicant.language1Name}</td>
                      <td>${applicant.language1Spoken}</td>
                      <td>${applicant.language1Written}</td>
                      <td>${applicant.language1Read}</td>
                    </tr>
                    <tr>
                      <td>${applicant.language2Name}</td>
                      <td>${applicant.language2Spoken}</td>
                      <td>${applicant.language2Written}</td>
                      <td>${applicant.language2Read}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <!-- Page 2: Family Details Form -->
          <div class="form-page">
            <div class="header">
              <div class="gnpc-logo">GNPC</div>
              <div class="company-name">GHANA NATIONAL PETROLEUM CORPORATION</div>
              <div class="form-title">FAMILY DETAILS - INTERN</div>
            </div>
            
            <div class="form-content">
              <!-- Family Details Section -->
              <div class="section">
                <div class="field-row">
                  <div class="field-label">14. Name of Father:</div>
                  <div class="field-value">${applicant.fatherName}</div>
                  <span style="margin-left: 10px; font-size: 10px;">(If Alive)</span>
                </div>
                <div class="field-row">
                  <div class="field-label">Contact Details:</div>
                  <div class="field-value">${applicant.fatherContact}</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">15. Name of Mother:</div>
                  <div class="field-value">${applicant.motherName}</div>
                  <span style="margin-left: 10px; font-size: 10px;">(If Alive)</span>
                </div>
                <div class="field-row">
                  <div class="field-label">Contact Details:</div>
                  <div class="field-value">${applicant.motherContact}</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">16. Guardian or Next of Kin:</div>
                  <div class="field-value">${applicant.guardianName}</div>
                </div>
                <div class="field-row">
                  <div class="field-label">Contact Details:</div>
                  <div class="field-value">${applicant.guardianContact}</div>
                </div>
              </div>
              
              <!-- Signature Section -->
              <div class="signature-section">
                <div class="signature-box">
                  <div class="signature-line"></div>
                  <div class="signature-label">SIGNATURE OF INTERN</div>
                  <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                    <span>DATE</span>
                    <div style="border-bottom: 1px solid #000; width: 60%;"></div>
                  </div>
                </div>
                <div class="signature-box">
                  <div class="signature-line"></div>
                  <div class="signature-label">NAME AND SIGNATURE OF HEAD OF DEPARTMENT</div>
                  <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                    <span>DATE</span>
                    <div style="border-bottom: 1px solid #000; width: 60%;"></div>
                  </div>
                </div>
              </div>
              
              <!-- Remarks Section -->
              <div class="remarks-section">
                <div class="remarks-title">REMARKS: [For Office Use Only]</div>
                <div class="remarks-lines"></div>
                <div class="remarks-lines"></div>
                <div class="remarks-lines"></div>
              </div>
            </div>
          </div>
          
          <!-- Page 3: Bank Account Details Form -->
          <div class="form-page">
            <div class="header">
              <div class="gnpc-logo">GNPC</div>
              <div class="company-name">GHANA NATIONAL PETROLEUM CORPORATION</div>
              <div class="form-title">2025 INTERNSHIP PROGRAMME</div>
              <div class="form-title">BANK ACCOUNT DETAILS</div>
            </div>
            
            <div class="passport-box">
              Passport Picture here
            </div>
            
            <div class="form-content">
              <table class="table" style="width: 100%; border: none;">
                <tbody>
                  <tr>
                    <td style="border: none; width: 30%; font-weight: bold; padding: 8px 0;">ACCOUNT NAME</td>
                    <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.accountName}</td>
                  </tr>
                  <tr>
                    <td style="border: none; font-weight: bold; padding: 8px 0;">NAME OF BANK</td>
                    <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.bankName}</td>
                  </tr>
                  <tr>
                    <td style="border: none; font-weight: bold; padding: 8px 0;">BRANCH</td>
                    <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.branch}</td>
                  </tr>
                  <tr>
                    <td style="border: none; font-weight: bold; padding: 8px 0;">ACCOUNT NUMBER</td>
                    <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.accountNumber}</td>
                  </tr>
                  <tr>
                    <td style="border: none; font-weight: bold; padding: 8px 0;">DIVISION/DEPARTMENT</td>
                    <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.divisionDepartment2}</td>
                  </tr>
                  <tr>
                    <td style="border: none; font-weight: bold; padding: 8px 0;">INSTITUTION</td>
                    <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.institution}</td>
                  </tr>
                  <tr>
                    <td style="border: none; font-weight: bold; padding: 8px 0;">LEVEL & PROGRAMME</td>
                    <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.levelProgramme}</td>
                  </tr>
                  <tr>
                    <td style="border: none; font-weight: bold; padding: 8px 0;">INTERNSHIP DURATION</td>
                    <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.internshipDuration}</td>
                  </tr>
                  <tr>
                    <td style="border: none; font-weight: bold; padding: 8px 0;">SIGNATURE</td>
                    <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.digitalSignature}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Page 4: Confidentiality Agreement Form -->
          <div class="form-page">
            <div class="header">
              <div class="gnpc-logo">GNPC</div>
              <div class="company-name">GHANA NATIONAL PETROLEUM CORPORATION</div>
              <div class="form-title">CONFIDENTIALITY AGREEMENT AND DECLARATION</div>
            </div>
            
            <div class="form-content">
              <div class="confidentiality-text">
                As further consideration of the industrial attachment programme offered to me by the Corporation I, 
                <span style="border-bottom: 1px solid #000; padding: 0 10px;">${applicant.applicantName}</span> 
                the undersigned HEREBY AGREE AND PLEDGE ON MY HONOUR to keep at all times confidential any information 
                relating to the business organization, or operation of the Corporation which may come into my knowledge 
                or use such information solely for the purpose of rendering my services to the Corporation and in the 
                interest of the Corporation and I shall not disclose any such information to any party or parties 
                whatsoever except when so required in accordance with the law or by direction of the Management.
              </div>
              
              <div class="confidentiality-text">
                This declaration shall remain in force after my internship programme in the Corporation.
              </div>
              
              <div style="margin-top: 30px;">
                <div class="field-row">
                  <div class="field-label">WITNESS MY HAND AT</div>
                  <div class="field-value">Accra</div>
                </div>
                
                <div class="field-row">
                  <div class="field-label">THIS</div>
                  <div class="field-value">${new Date(applicant.signatureDate).getDate()}</div>
                  <span style="margin: 0 10px;">DAY OF</span>
                  <div class="field-value">${new Date(applicant.signatureDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
                </div>
              </div>
              
              <div style="display: flex; justify-content: space-between; margin-top: 30px;">
                <div style="width: 45%;">
                  <div class="field-row">
                    <div class="field-label">BEFORE ME</div>
                    <div class="field-value"></div>
                  </div>
                  <div style="text-align: center; margin-top: 10px;">
                    <div style="border-bottom: 1px solid #000; width: 80%; margin: 0 auto;"></div>
                    <div style="font-size: 10px; margin-top: 5px;">NAME</div>
                  </div>
                </div>
                
                <div style="width: 45%;">
                  <div class="field-row">
                    <div class="field-label">SIGNATURE AND/OR THUMBPRINT OF INTERN</div>
                    <div class="field-value">${applicant.digitalSignature}</div>
                  </div>
                  <div class="field-row" style="margin-top: 20px;">
                    <div class="field-label">SIGNATURE OF HEAD OF DEPARTMENT OR HIS/HER REPRESENTATIVE</div>
                    <div class="field-value"></div>
                  </div>
                </div>
              </div>
              
              <div class="note">
                NOTE: THIS CONFIDENTIALITY AGREEMENT AND THE DECLARATION MADE HEREIN CONSTITUTE AN INTEGRAL PART 
                OF YOUR INTERNSHIP PROGRAMME AND IS TO BE MADE BEFORE THE HEAD OF DEPARTMENT OR HIS APPOINTEE.
              </div>
            </div>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.print()
  }

  // Print Personal Details Form Only
  const printPersonalDetails = (applicant) => {
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <html>
        <head>
          <title>GNPC Personal Details - ${applicant.applicantName}</title>
          <style>
            @page {
              size: A4;
              margin: 1cm;
            }
            body { 
              font-family: 'Times New Roman', serif; 
              margin: 0; 
              padding: 0;
              font-size: 12px;
              line-height: 1.4;
            }
            .header {
              background-color: #2c3e50;
              color: white;
              padding: 10px 0;
              text-align: center;
              margin-bottom: 20px;
            }
            .gnpc-logo {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .company-name {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .form-title {
              font-size: 16px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .passport-box {
              position: absolute;
              top: 20px;
              right: 20px;
              width: 120px;
              height: 150px;
              border: 2px solid #000;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #f8f9fa;
              font-size: 10px;
              text-align: center;
            }
            .form-content {
              margin-top: 20px;
              position: relative;
            }
            .section {
              margin-bottom: 15px;
            }
            .section-title {
              font-weight: bold;
              text-decoration: underline;
              margin-bottom: 10px;
              font-size: 14px;
            }
            .field-row {
              display: flex;
              margin-bottom: 8px;
              align-items: center;
            }
            .field-label {
              font-weight: bold;
              min-width: 200px;
              margin-right: 10px;
            }
            .field-value {
              flex: 1;
              border-bottom: 1px dotted #000;
              min-height: 20px;
              padding-left: 5px;
            }
            .table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 15px;
            }
            .table th, .table td {
              border: 1px solid #000;
              padding: 8px;
              text-align: left;
            }
            .table th {
              background-color: #f8f9fa;
              font-weight: bold;
            }
            @media print {
              body { margin: 0; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="gnpc-logo">GNPC</div>
            <div class="company-name">GHANA NATIONAL PETROLEUM CORPORATION</div>
            <div class="form-title">PERSONAL DETAILS - INTERN</div>
          </div>
          
          <div class="passport-box">
            Passport Picture here
          </div>
          
          <div class="form-content">
            <!-- Personal Details Section -->
            <div class="section">
              <div class="field-row">
                <div class="field-label">1. Full Name:</div>
                <div class="field-value">${applicant.applicantName}</div>
              </div>
              <div style="font-size: 10px; margin-left: 200px; margin-bottom: 10px;">Surname First - (Block letters)</div>
              
              <div class="field-row">
                <div class="field-label">2. GNPC ID No.:</div>
                <div class="field-value">${applicant.gnpcId}</div>
              </div>
              
              <div class="field-row">
                <div class="field-label">3. Date of Birth:</div>
                <div class="field-value">${applicant.dateOfBirth}</div>
              </div>
              
              <div class="field-row">
                <div class="field-label">4. Place of Birth:</div>
                <div class="field-value">${applicant.placeOfBirth}</div>
              </div>
              
              <div class="field-row">
                <div class="field-label">5. Nationality:</div>
                <div class="field-value">${applicant.nationality}</div>
              </div>
              
              <div class="field-row">
                <div class="field-label">6. Religion:</div>
                <div class="field-value">${applicant.religion}</div>
              </div>
              
              <div class="field-row">
                <div class="field-label">7. Marital Status:</div>
                <div class="field-value">${applicant.maritalStatus}</div>
              </div>
            </div>
            
            <!-- Educational Background Section -->
            <div class="section">
              <div class="section-title">8. Educational Background:</div>
              <table class="table">
                <thead>
                  <tr>
                    <th>Institution</th>
                    <th>Programme of Study</th>
                    <th>Start/End Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${applicant.institution1}</td>
                    <td>${applicant.levelProgramme}</td>
                    <td>${applicant.institution1Start} - ${applicant.institution1End}</td>
                  </tr>
                  <tr>
                    <td>${applicant.institution2}</td>
                    <td></td>
                    <td>${applicant.institution2Start} - ${applicant.institution2End}</td>
                  </tr>
                  <tr>
                    <td>${applicant.institution3}</td>
                    <td></td>
                    <td>${applicant.institution3Start} - ${applicant.institution3End}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- Internship Details Section -->
            <div class="section">
              <div class="field-row">
                <div class="field-label">9. Period of Internship:</div>
                <div class="field-value">${applicant.startDate} - ${applicant.endDate}</div>
              </div>
              
              <div class="field-row">
                <div class="field-label">10. Division/Department:</div>
                <div class="field-value">${applicant.department}</div>
              </div>
            </div>
            
            <!-- Contact Information Section -->
            <div class="section">
              <div class="field-row">
                <div class="field-label">11. (a) Present Residential Address:</div>
                <div class="field-value">${applicant.residentialAddress}</div>
              </div>
              
              <div class="field-row">
                <div class="field-label">11. (b) Mobile Number(s):</div>
                <div class="field-value">${applicant.mobileNumber}</div>
              </div>
              
              <div class="field-row">
                <div class="field-label">12. Postal Address:</div>
                <div class="field-value">${applicant.residentialAddress}</div>
              </div>
            </div>
            
            <!-- Languages Section -->
            <div class="section">
              <div class="section-title">13. Languages:</div>
              <div style="font-size: 10px; margin-bottom: 10px;">[*] Indicate: EXCELLENT; VERY GOOD; GOOD; FAIR</div>
              <table class="table">
                <thead>
                  <tr>
                    <th>Languages</th>
                    <th>Spoken [*]</th>
                    <th>Written [*]</th>
                    <th>Read [*]</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${applicant.language1Name}</td>
                    <td>${applicant.language1Spoken}</td>
                    <td>${applicant.language1Written}</td>
                    <td>${applicant.language1Read}</td>
                  </tr>
                  <tr>
                    <td>${applicant.language2Name}</td>
                    <td>${applicant.language2Spoken}</td>
                    <td>${applicant.language2Written}</td>
                    <td>${applicant.language2Read}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.print()
  }

  // Print Bank Details Form Only
  const printBankDetails = (applicant) => {
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <html>
        <head>
          <title>GNPC Bank Details - ${applicant.applicantName}</title>
          <style>
            @page {
              size: A4;
              margin: 1cm;
            }
            body { 
              font-family: 'Times New Roman', serif; 
              margin: 0; 
              padding: 0;
              font-size: 12px;
              line-height: 1.4;
            }
            .header {
              background-color: #2c3e50;
              color: white;
              padding: 10px 0;
              text-align: center;
              margin-bottom: 20px;
            }
            .gnpc-logo {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .company-name {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .form-title {
              font-size: 16px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .passport-box {
              position: absolute;
              top: 20px;
              right: 20px;
              width: 120px;
              height: 150px;
              border: 2px solid #000;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #f8f9fa;
              font-size: 10px;
              text-align: center;
            }
            .form-content {
              margin-top: 20px;
              position: relative;
            }
            .table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 15px;
            }
            .table th, .table td {
              border: 1px solid #000;
              padding: 8px;
              text-align: left;
            }
            .table th {
              background-color: #f8f9fa;
              font-weight: bold;
            }
            @media print {
              body { margin: 0; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="gnpc-logo">GNPC</div>
            <div class="company-name">GHANA NATIONAL PETROLEUM CORPORATION</div>
            <div class="form-title">2025 INTERNSHIP PROGRAMME</div>
            <div class="form-title">BANK ACCOUNT DETAILS</div>
          </div>
          
          <div class="passport-box">
            Passport Picture here
          </div>
          
          <div class="form-content">
            <table class="table" style="width: 100%; border: none;">
              <tbody>
                <tr>
                  <td style="border: none; width: 30%; font-weight: bold; padding: 8px 0;">ACCOUNT NAME</td>
                  <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.accountName}</td>
                </tr>
                <tr>
                  <td style="border: none; font-weight: bold; padding: 8px 0;">NAME OF BANK</td>
                  <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.bankName}</td>
                </tr>
                <tr>
                  <td style="border: none; font-weight: bold; padding: 8px 0;">BRANCH</td>
                  <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.branch}</td>
                </tr>
                <tr>
                  <td style="border: none; font-weight: bold; padding: 8px 0;">ACCOUNT NUMBER</td>
                  <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.accountNumber}</td>
                </tr>
                <tr>
                  <td style="border: none; font-weight: bold; padding: 8px 0;">DIVISION/DEPARTMENT</td>
                  <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.divisionDepartment2}</td>
                </tr>
                <tr>
                  <td style="border: none; font-weight: bold; padding: 8px 0;">INSTITUTION</td>
                  <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.institution}</td>
                </tr>
                <tr>
                  <td style="border: none; font-weight: bold; padding: 8px 0;">LEVEL & PROGRAMME</td>
                  <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.levelProgramme}</td>
                </tr>
                <tr>
                  <td style="border: none; font-weight: bold; padding: 8px 0;">INTERNSHIP DURATION</td>
                  <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.internshipDuration}</td>
                </tr>
                <tr>
                  <td style="border: none; font-weight: bold; padding: 8px 0;">SIGNATURE</td>
                  <td style="border: none; border-bottom: 1px solid #000; padding: 8px 0;">${applicant.digitalSignature}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.print()
  }

  // Print Confidentiality Agreement Form Only
  const printConfidentialityAgreement = (applicant) => {
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <html>
        <head>
          <title>GNPC Confidentiality Agreement - ${applicant.applicantName}</title>
          <style>
            @page {
              size: A4;
              margin: 1cm;
            }
            body { 
              font-family: 'Times New Roman', serif; 
              margin: 0; 
              padding: 0;
              font-size: 12px;
              line-height: 1.4;
            }
            .header {
              background-color: #2c3e50;
              color: white;
              padding: 10px 0;
              text-align: center;
              margin-bottom: 20px;
            }
            .gnpc-logo {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .company-name {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .form-title {
              font-size: 16px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .form-content {
              margin-top: 20px;
              position: relative;
            }
            .field-row {
              display: flex;
              margin-bottom: 8px;
              align-items: center;
            }
            .field-label {
              font-weight: bold;
              min-width: 200px;
              margin-right: 10px;
            }
            .field-value {
              flex: 1;
              border-bottom: 1px dotted #000;
              min-height: 20px;
              padding-left: 5px;
            }
            .confidentiality-text {
              text-align: justify;
              margin-bottom: 20px;
              line-height: 1.6;
            }
            .note {
              font-weight: bold;
              text-align: center;
              margin-top: 20px;
              font-size: 11px;
            }
            @media print {
              body { margin: 0; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="gnpc-logo">GNPC</div>
            <div class="company-name">GHANA NATIONAL PETROLEUM CORPORATION</div>
            <div class="form-title">CONFIDENTIALITY AGREEMENT AND DECLARATION</div>
          </div>
          
          <div class="form-content">
            <div class="confidentiality-text">
              As further consideration of the industrial attachment programme offered to me by the Corporation I, 
              <span style="border-bottom: 1px solid #000; padding: 0 10px;">${applicant.applicantName}</span> 
              the undersigned HEREBY AGREE AND PLEDGE ON MY HONOUR to keep at all times confidential any information 
              relating to the business organization, or operation of the Corporation which may come into my knowledge 
              or use such information solely for the purpose of rendering my services to the Corporation and in the 
              interest of the Corporation and I shall not disclose any such information to any party or parties 
              whatsoever except when so required in accordance with the law or by direction of the Management.
            </div>
            
            <div class="confidentiality-text">
              This declaration shall remain in force after my internship programme in the Corporation.
            </div>
            
            <div style="margin-top: 30px;">
              <div class="field-row">
                <div class="field-label">WITNESS MY HAND AT</div>
                <div class="field-value">Accra</div>
              </div>
              
              <div class="field-row">
                <div class="field-label">THIS</div>
                <div class="field-value">${new Date(applicant.signatureDate).getDate()}</div>
                <span style="margin: 0 10px;">DAY OF</span>
                <div class="field-value">${new Date(applicant.signatureDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
              </div>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-top: 30px;">
              <div style="width: 45%;">
                <div class="field-row">
                  <div class="field-label">BEFORE ME</div>
                  <div class="field-value"></div>
                </div>
                <div style="text-align: center; margin-top: 10px;">
                  <div style="border-bottom: 1px solid #000; width: 80%; margin: 0 auto;"></div>
                  <div style="font-size: 10px; margin-top: 5px;">NAME</div>
                </div>
              </div>
              
              <div style="width: 45%;">
                <div class="field-row">
                  <div class="field-label">SIGNATURE AND/OR THUMBPRINT OF INTERN</div>
                  <div class="field-value">${applicant.digitalSignature}</div>
                </div>
                <div class="field-row" style="margin-top: 20px;">
                  <div class="field-label">SIGNATURE OF HEAD OF DEPARTMENT OR HIS/HER REPRESENTATIVE</div>
                  <div class="field-value"></div>
                </div>
              </div>
            </div>
            
            <div class="note">
              NOTE: THIS CONFIDENTIALITY AGREEMENT AND THE DECLARATION MADE HEREIN CONSTITUTE AN INTEGRAL PART 
              OF YOUR INTERNSHIP PROGRAMME AND IS TO BE MADE BEFORE THE HEAD OF DEPARTMENT OR HIS APPOINTEE.
            </div>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.print()
  }

  return (
    <div className="w-full p-6 ml-15 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Onboarding Management</h1>
        <p className="text-gray-600">Manage and track intern onboarding applications and documents</p>
      </div>

      {/* Upload Section */}
      {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Upload Onboarding Applications</h2>
          <div className="flex items-center gap-3">
            <label className="relative cursor-pointer bg-[#2D8FA5] text-white px-4 py-2 rounded-lg hover:bg-[#1a6b7a] transition-colors flex items-center gap-2">
              <Upload className="w-4 h-4" />
              {isUploading ? 'Uploading...' : 'Upload Files'}
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </label>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Upload onboarding applications from the intern recruitment process. Supported formats: PDF, DOC, DOCX, JPG, PNG
        </p>
      </div> */}

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name, email, institution, or GNPC ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8FA5] focus:border-transparent"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8FA5] focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="text-sm text-gray-600">
            {filteredData.length} of {onboardingData.length} applicants
          </div>
        </div>
      </div>

      {/* Onboarding List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applicant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  GNPC ID & Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Documents
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((applicant) => (
                <tr key={applicant.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-[#2D8FA5] flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {applicant.applicantName}
                        </div>
                        <div className="text-sm text-gray-500">{applicant.email}</div>
                        <div className="text-xs text-gray-400">{applicant.institution}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="font-medium">{applicant.gnpcId}</div>
                      <div className="text-gray-500">{applicant.position}</div>
                      <div className="text-xs text-gray-400">{applicant.department}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {Object.values(applicant.documents).filter(doc => doc).length} of 7
                    </div>
                    <div className="text-xs text-gray-500">
                      {Object.values(applicant.documents).filter(doc => doc).length === 7 ? 'Complete' : 'Incomplete'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(applicant.status)}`}>
                      {getStatusIcon(applicant.status)}
                      <span className="ml-1 capitalize">{applicant.status.replace('_', ' ')}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(applicant.submittedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedApplicant(applicant)
                          setShowModal(true)
                        }}
                        className="text-blue-600 hover:text-blue-900 p-1"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <div className="relative group">
                        <button
                          className="text-green-600 hover:text-green-900 p-1"
                          title="Print Forms"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                        <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10 min-w-[200px] hidden group-hover:block">
                          <button
                            onClick={() => printPersonalDetails(applicant)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            📋 Personal Details
                          </button>
                          <button
                            onClick={() => printBankDetails(applicant)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            🏦 Bank Details
                          </button>
                          <button
                            onClick={() => printConfidentialityAgreement(applicant)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            📄 Confidentiality Agreement
                          </button>
                          <div className="border-t border-gray-200 my-1"></div>
                          <button
                            onClick={() => printApplicant(applicant)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium"
                          >
                            📑 All Forms
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteApplicant(applicant.id)}
                        className="text-red-600 hover:text-red-900 p-1"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {showModal && selectedApplicant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  GNPC Intern Details - {selectedApplicant.applicantName}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Personal Information */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">GNPC ID:</span>
                      <span className="text-sm">{selectedApplicant.gnpcId}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{selectedApplicant.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{selectedApplicant.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{selectedApplicant.residentialAddress}</span>
                    </div>
                  </div>
                </div>

                {/* Internship Details */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Internship Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">Position:</span>
                      <span className="text-sm">{selectedApplicant.position}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">Department:</span>
                      <span className="text-sm">{selectedApplicant.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{selectedApplicant.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{selectedApplicant.startDate} - {selectedApplicant.endDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Required Documents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedApplicant.documents).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">
                          {key === 'passportPicture' ? 'Passport Picture' : 
                           key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </div>
                        <div className="text-xs text-gray-500">
                          {value ? 'Submitted' : 'Not submitted'}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {value ? (
                          <>
                            <button className="text-blue-600 hover:text-blue-800 p-1">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-800 p-1">
                              <Download className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <span className="text-red-500 text-xs">Missing</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Management */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Status Management</h3>
                <div className="flex items-center gap-4">
                  <select
                    value={selectedApplicant.status}
                    onChange={(e) => {
                      updateStatus(selectedApplicant.id, e.target.value)
                      setSelectedApplicant({...selectedApplicant, status: e.target.value})
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8FA5] focus:border-transparent"
                  >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              {/* Print Forms Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Print Forms</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    onClick={() => printPersonalDetails(selectedApplicant)}
                    className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
                  >
                    <Printer className="w-4 h-4" />
                    Personal Details
                  </button>
                  <button
                    onClick={() => printBankDetails(selectedApplicant)}
                    className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm"
                  >
                    <Printer className="w-4 h-4" />
                    Bank Details
                  </button>
                  <button
                    onClick={() => printConfidentialityAgreement(selectedApplicant)}
                    className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 text-sm"
                  >
                    <Printer className="w-4 h-4" />
                    Confidentiality
                  </button>
                  <button
                    onClick={() => printApplicant(selectedApplicant)}
                    className="bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 text-sm"
                  >
                    <Printer className="w-4 h-4" />
                    All Forms
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Notes</h3>
                <textarea
                  value={selectedApplicant.notes}
                  onChange={(e) => {
                    const updatedApplicant = {...selectedApplicant, notes: e.target.value}
                    setSelectedApplicant(updatedApplicant)
                    const updatedData = onboardingData.map(app => 
                      app.id === selectedApplicant.id ? updatedApplicant : app
                    )
                    setOnboardingData(updatedData)
                    localStorage.setItem('onboardingData', JSON.stringify(updatedData))
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D8FA5] focus:border-transparent"
                  rows="3"
                  placeholder="Add notes about this applicant..."
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Onboarding