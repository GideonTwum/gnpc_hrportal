# HR Portal - GNPC Intern Onboarding Management System

## Overview

The GNPC Intern Onboarding Management System is a comprehensive interface within the HR Portal that allows HR personnel to receive, store, view, and manage onboarding documents from the intern recruitment process. This system provides a seamless workflow for handling intern onboarding from initial application to final onboarding completion, with the ability to print official GNPC forms.

## Features

### 🚀 Core Functionality

1. **File Upload & Storage**
   - Upload onboarding documents from the intern recruitment process
   - Support for multiple file formats (PDF, DOC, DOCX, JPG, PNG)
   - Automatic file organization and categorization

2. **Applicant Management**
   - View all onboarding applicants in a comprehensive table
   - Search and filter applicants by name, email, institution, GNPC ID, or status
   - Track application status (Pending, In Progress, Completed)

3. **Document Management**
   - Preview uploaded documents
   - Download individual files
   - Track document completion status
   - Required documents tracking:
     - Passport Picture
     - Personal Information
     - Academic Records
     - ID Documents
     - Medical Form
     - Bank Details
     - Emergency Contact

4. **Status Tracking**
   - Real-time status updates
   - Progress monitoring
   - Completion tracking
   - Automated notifications

5. **Print & Export**
   - Generate official GNPC form prints
   - Export data to CSV format
   - Professional form formatting matching official GNPC templates

### 🎨 User Interface

- **Modern Design**: Clean, professional interface using Tailwind CSS
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Intuitive Navigation**: Easy-to-use interface with clear action buttons
- **Visual Status Indicators**: Color-coded status badges and icons
- **Modal Dialogs**: Detailed views without page navigation

### 📊 Data Management

- **Local Storage**: Persistent data storage using browser localStorage
- **Data Validation**: Input validation and error handling
- **Search & Filter**: Advanced search and filtering capabilities
- **Statistics**: Real-time statistics and analytics

## File Structure

```
app/
├── components/
│   ├── Onboarding.jsx          # Main onboarding interface
│   └── ...
├── utils/
│   ├── FileHandler.jsx         # File handling utilities
│   ├── OnboardingService.js    # Data management service
│   ├── FormValidator.js        # Form validation utilities
│   └── ...
└── ...
```

## Integration with Intern Recruitment

### Data Flow

1. **Intern Recruitment Process** (`internrecruitment` folder)
   - Applicants fill out onboarding forms
   - Documents are uploaded and submitted
   - Data is prepared for HR review

2. **HR Portal Integration**
   - HR receives onboarding submissions
   - Files are stored and organized
   - Status tracking begins

3. **Onboarding Management**
   - HR reviews submitted documents
   - Updates application status
   - Manages the onboarding process
   - Generates official GNPC form prints

### Required Documents

The system tracks the following required documents:

1. **Passport Picture**
   - Professional passport-sized photograph
   - Required for official records

2. **Personal Information**
   - Basic personal details
   - Contact information
   - Emergency contacts

3. **Academic Records**
   - Transcripts
   - Certificates
   - Academic references

4. **ID Documents**
   - National ID
   - Passport (if applicable)
   - Student ID

5. **Medical Form**
   - Health declaration
   - Medical certificates
   - Vaccination records

6. **Bank Details**
   - Bank account information
   - Routing numbers
   - Account verification

7. **Emergency Contact**
   - Emergency contact details
   - Relationship information
   - Contact preferences

## GNPC Form Structure

The system generates prints that match the official GNPC forms:

### **Page 1: Personal Details Form**
- **Header**: GNPC logo and company name
- **Passport Picture Box**: Top right corner
- **Personal Details**: Full name, GNPC ID, date of birth, place of birth, nationality, religion, marital status
- **Educational Background**: Table format with institutions, programmes, and dates
- **Internship Details**: Period, division/department
- **Contact Information**: Residential address, mobile number, postal address
- **Languages**: Table format with spoken, written, and reading proficiency levels

### **Page 2: Family Details Form**
- **Header**: GNPC branding
- **Family Information**: Father, mother, and guardian details with contact information
- **Signature Section**: Intern signature and department head signature
- **Remarks Section**: For office use only

### **Page 3: Bank Account Details Form**
- **Header**: GNPC branding with "2025 INTERNSHIP PROGRAMME"
- **Passport Picture Box**: Top right corner
- **Bank Details**: Account name, bank name, branch, account number
- **Internship Information**: Division/department, institution, level & programme, duration
- **Signature**: Intern signature

### **Page 4: Confidentiality Agreement Form**
- **Header**: GNPC branding
- **Confidentiality Text**: Official agreement text with intern name
- **Declaration**: Legal declaration text
- **Signature Section**: Witness details and intern signature
- **Note**: Official note about agreement requirements

## Usage Guide

### For HR Personnel

#### 1. Accessing the Onboarding Interface
- Navigate to the Onboarding section in the HR Portal
- View the main dashboard with all onboarding applications

#### 2. Uploading New Applications
- Click the "Upload Files" button
- Select files from the intern recruitment process
- Files will be automatically categorized and stored

#### 3. Managing Applications
- Use the search bar to find specific applicants
- Filter by status (Pending, In Progress, Completed)
- Click on an applicant to view detailed information

#### 4. Updating Status
- Open applicant details
- Change status using the dropdown menu
- Add notes and comments
- Save changes

#### 5. Printing Official Forms
- Click the print icon next to any applicant
- Generate official GNPC form prints
- Forms will be formatted exactly like official GNPC templates
- Print or save as PDF for official records

### For System Administrators

#### 1. Data Export
- Export all onboarding data to CSV format
- Use for backup or external analysis
- Maintain data integrity

#### 2. Data Import
- Import onboarding data from external sources
- Bulk upload capabilities
- Data validation and error handling

#### 3. System Configuration
- Configure required documents
- Set up status workflows
- Customize notification settings

## Technical Implementation

### Dependencies

```json
{
  "lucide-react": "^0.517.0",
  "react-hot-toast": "^2.5.2",
  "tailwindcss": "^4"
}
```

### Key Components

#### Onboarding.jsx
- Main interface component
- Handles all user interactions
- Manages state and data flow
- Generates official GNPC form prints

#### FileHandler.jsx
- File preview and download functionality
- File type detection and icons
- Modal preview windows

#### OnboardingService.js
- Data persistence and management
- CRUD operations
- Search and filtering logic
- Export/import functionality

#### FormValidator.js
- Form validation for all GNPC fields
- Document completion tracking
- Data integrity checks
- GNPC ID generation and validation

### Data Structure

```javascript
{
  id: number,
  applicantName: string,
  email: string,
  phone: string,
  gnpcId: string,
  dateOfBirth: string,
  placeOfBirth: string,
  nationality: string,
  religion: string,
  maritalStatus: string,
  institution: string,
  levelProgramme: string,
  internshipDuration: string,
  position: string,
  department: string,
  startDate: string,
  endDate: string,
  status: 'pending' | 'in_progress' | 'completed',
  submittedDate: string,
  residentialAddress: string,
  mobileNumber: string,
  
  // Educational Background
  institution1: string,
  institution1Start: string,
  institution1End: string,
  institution2: string,
  institution2Start: string,
  institution2End: string,
  institution3: string,
  institution3Start: string,
  institution3End: string,
  
  // Languages
  language1Name: string,
  language1Spoken: string,
  language1Written: string,
  language1Read: string,
  language2Name: string,
  language2Spoken: string,
  language2Written: string,
  language2Read: string,
  
  // Family Details
  fatherName: string,
  fatherContact: string,
  motherName: string,
  motherContact: string,
  guardianName: string,
  guardianContact: string,
  
  // Bank Details
  accountName: string,
  bankName: string,
  branch: string,
  accountNumber: string,
  divisionDepartment2: string,
  
  // Documents
  documents: {
    passportPicture: string | null,
    personalInfo: string | null,
    academicRecords: string | null,
    idDocuments: string | null,
    medicalForm: string | null,
    bankDetails: string | null,
    emergencyContact: string | null
  },
  
  // Confidentiality Agreement
  confidentialityAgreed: boolean,
  declarationAgreed: boolean,
  termsAgreed: boolean,
  digitalSignature: string,
  signatureDate: string,
  
  notes: string
}
```

## Print System Features

### **Official GNPC Form Generation**
- **Exact Layout**: Matches official GNPC form templates
- **Professional Formatting**: Clean, official appearance
- **Multi-page Output**: 4-page complete form set
- **Print-ready**: Optimized for A4 printing

### **Form Sections**
1. **Personal Details**: Complete personal information
2. **Family Details**: Family contact information
3. **Bank Details**: Banking and internship information
4. **Confidentiality Agreement**: Legal agreement and signatures

### **Print Features**
- **GNPC Branding**: Official logo and company name
- **Passport Picture Box**: Designated photo area
- **Formatted Tables**: Educational background and languages
- **Signature Areas**: Proper signature and date fields
- **Professional Styling**: Clean, official appearance

## Future Enhancements

### Planned Features

1. **Email Notifications**
   - Automated status update emails
   - Document completion reminders
   - Welcome emails for new applicants

2. **Advanced Analytics**
   - Onboarding completion rates
   - Time-to-completion metrics
   - Department-wise statistics

3. **Integration APIs**
   - Connect with external HR systems
   - Email service integration
   - Document storage services

4. **Mobile App**
   - Native mobile application
   - Push notifications
   - Offline capabilities

5. **Workflow Automation**
   - Automated status transitions
   - Document verification workflows
   - Approval processes

## Troubleshooting

### Common Issues

1. **File Upload Failures**
   - Check file size limits
   - Verify supported file formats
   - Ensure proper file permissions

2. **Data Not Saving**
   - Check browser localStorage availability
   - Verify data format
   - Check for JavaScript errors

3. **Print Issues**
   - Ensure popup blockers are disabled
   - Check printer settings
   - Verify browser print capabilities

### Support

For technical support or feature requests, please contact the development team or create an issue in the project repository.

## Security Considerations

- All data is stored locally in the browser
- No sensitive data is transmitted to external servers
- File uploads are validated for security
- Access control should be implemented at the application level

## Performance Optimization

- Lazy loading for large datasets
- Efficient search and filtering algorithms
- Optimized file handling
- Minimal re-renders using React best practices

---

**Version**: 2.0.0  
**Last Updated**: December 2024  
**Maintained By**: HR Portal Development Team 