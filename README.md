# HR Portal - GNPC Intern Management System

## Overview

The HR Portal is a comprehensive Next.js application designed for managing GNPC (Ghana National Petroleum Corporation) intern recruitment and onboarding processes. This system provides a complete workflow from application submission to onboarding completion, with features for HR personnel to manage applicants, track statuses, and generate official GNPC forms.

## 🚀 Features

### Core Functionality
- **User Authentication & Authorization**
- **Applicant Management System**
- **Onboarding Document Management**
- **Status Tracking & Workflow**
- **Official GNPC Form Generation**
- **Real-time Notifications**
- **Data Export/Import**
- **Theme & Accessibility Settings**

### User Roles
- **HR Personnel**: Full access to manage applications and onboarding
- **Applicants**: Submit applications and track status
- **Administrators**: System configuration and oversight

## 📁 Project Structure

```
hrportal/
├── app/                          # Next.js App Router directory
│   ├── components/               # Reusable UI components
│   ├── utils/                    # Utility functions and services
│   ├── context/                  # React context providers
│   ├── settings/                 # Settings page components
│   ├── applications/             # Application management
│   ├── messages/                 # Messaging system
│   ├── manage/                   # Site and form management
│   ├── admin/                    # Admin dashboard
│   ├── applicant-details/        # Individual applicant views
│   ├── demo-applicant-site/      # Demo applicant interface
│   ├── utility/                  # Additional utility components
│   ├── layout.js                 # Root layout component
│   ├── page.js                   # Home page
│   ├── globals.css               # Global styles
│   └── favicon.ico               # Site favicon
├── public/                       # Static assets
│   └── images/                   # Image assets
├── package.json                  # Dependencies and scripts
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── jsconfig.json                # JavaScript configuration
├── postcss.config.mjs           # PostCSS configuration
└── .gitignore                   # Git ignore rules
```

## 🔧 Configuration Files

### `package.json`
**Purpose**: Project dependencies and scripts configuration
**Key Dependencies**:
- `next`: React framework for production
- `react` & `react-dom`: Core React libraries
- `antd`: Ant Design UI component library
- `lucide-react`: Icon library
- `react-hot-toast`: Toast notifications
- `react-icons`: Additional icon library
- `recharts`: Chart components for analytics
- `tailwindcss`: Utility-first CSS framework

**Scripts**:
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### `next.config.mjs`
**Purpose**: Next.js framework configuration
**Features**: Optimized for production builds and performance

### `tsconfig.json`
**Purpose**: TypeScript compiler configuration
**Features**: Strict type checking and modern JavaScript features

### `jsconfig.json`
**Purpose**: JavaScript language service configuration
**Features**: Path mapping and module resolution

### `postcss.config.mjs`
**Purpose**: PostCSS configuration for CSS processing
**Features**: Tailwind CSS integration

## 🎨 Core Components

### `app/layout.js`
**Purpose**: Root layout component that wraps all pages
**Features**:
- Font optimization with Geist fonts
- Theme provider integration
- Global metadata configuration
- Responsive design setup

### `app/page.js`
**Purpose**: Home page component
**Features**:
- Renders the Login component
- Entry point for the application

### `app/globals.css`
**Purpose**: Global CSS styles
**Features**:
- Tailwind CSS directives
- Custom CSS variables
- Responsive design utilities
- Theme-specific styling

## 🔐 Authentication & Context

### `app/context/ThemeContext.jsx`
**Purpose**: Global theme and user preferences management
**Features**:
- **Theme Management**: Light/dark mode toggle
- **Language Settings**: Multi-language support
- **Font Size Control**: Accessibility feature
- **Compact Mode**: UI density toggle
- **Local Storage**: Persistent user preferences
- **Context Provider**: React context for global state

**Key Functions**:
- `toggleTheme()`: Switch between light/dark themes
- `changeLanguage()`: Update application language
- `changeFontSize()`: Adjust text size for accessibility
- `toggleCompactMode()`: Toggle UI density

## 🧩 UI Components

### `app/components/Navbar.jsx`
**Purpose**: Main navigation component
**Features**:
- **User Profile Dropdown**: Account management menu
- **Notifications**: Real-time notification system
- **Responsive Design**: Mobile-friendly navigation
- **Theme Integration**: Adapts to current theme
- **User Actions**: Profile, account, settings, logout

**Key Features**:
- Notification system with Ant Design
- Dropdown menu with user actions
- Click-outside detection for dropdowns
- User profile display

### `app/components/Dashboard.jsx`
**Purpose**: Main dashboard for HR personnel
**Features**:
- **Applicant Statistics**: Real-time counts and metrics
- **Data Visualization**: Charts and graphs
- **Status Tracking**: Pending, approved, rejected counts
- **Local Storage Integration**: Persistent data management
- **Responsive Layout**: Mobile-friendly design

**Key Features**:
- Applicant data management
- Status calculation and display
- Chart integration with Bcharts component
- Real-time data updates

### `app/components/Login.jsx`
**Purpose**: User authentication interface
**Features**:
- **Form Validation**: Input validation and error handling
- **User Authentication**: Login/logout functionality
- **Responsive Design**: Mobile-friendly login form
- **Security**: Secure credential handling

### `app/components/Onboarding.jsx`
**Purpose**: Comprehensive onboarding management interface
**Features**:
- **File Upload System**: Document management
- **Applicant Tracking**: Status management
- **GNPC Form Generation**: Official form printing
- **Search & Filter**: Advanced data filtering
- **Data Export**: CSV export functionality
- **Print System**: Professional form generation

**Key Features**:
- Multi-file upload with drag-and-drop
- Real-time status updates
- Professional GNPC form templates
- Advanced search and filtering
- Data validation and error handling

### `app/components/Apply.jsx`
**Purpose**: Application submission interface
**Features**:
- **Form Validation**: Comprehensive input validation
- **File Upload**: Document submission
- **Progress Tracking**: Multi-step form process
- **User Feedback**: Real-time validation messages

### `app/components/Applications.jsx`
**Purpose**: Application listing and management
**Features**:
- **Data Table**: Sortable and filterable applicant list
- **Status Management**: Update application statuses
- **Search Functionality**: Find specific applicants
- **Bulk Actions**: Mass status updates

### `app/components/Description.jsx`
**Purpose**: Job description and requirements display
**Features**:
- **Rich Content**: Formatted job descriptions
- **Requirements List**: Clear qualification criteria
- **Benefits Display**: Company benefits showcase
- **Responsive Layout**: Mobile-friendly design

### `app/components/Messages.jsx`
**Purpose**: Internal messaging system
**Features**:
- **Real-time Chat**: Instant messaging between users
- **Message History**: Persistent conversation storage
- **User Management**: Contact list and user status
- **File Sharing**: Document sharing capabilities

### `app/components/Settings.jsx`
**Purpose**: User settings and preferences
**Features**:
- **Theme Settings**: Appearance customization
- **Account Management**: Profile and security settings
- **Notification Preferences**: Alert customization
- **Accessibility Options**: Font size and contrast settings

### `app/components/Intern.jsx`
**Purpose**: Intern-specific interface
**Features**:
- **Status Tracking**: Application progress monitoring
- **Document Upload**: Required document submission
- **Communication**: Direct messaging with HR
- **Timeline View**: Application timeline display

### `app/components/Report.jsx`
**Purpose**: Reporting and analytics interface
**Features**:
- **Data Visualization**: Charts and graphs
- **Export Functionality**: Report generation
- **Filtering Options**: Custom report parameters
- **Real-time Updates**: Live data refresh

## 🛠️ Utility Components

### `app/utility/BenefitCard.jsx`
**Purpose**: Reusable benefit display component
**Features**:
- **Consistent Styling**: Standardized benefit presentation
- **Icon Integration**: Visual benefit representation
- **Responsive Design**: Mobile-friendly layout
- **Theme Support**: Adapts to current theme

## 📊 Utility Services

### `app/utils/OnboardingService.js`
**Purpose**: Data management service for onboarding operations
**Features**:
- **CRUD Operations**: Create, read, update, delete records
- **Local Storage**: Persistent data management
- **Search & Filter**: Advanced data filtering
- **Data Export**: CSV export functionality
- **Data Validation**: Input validation and error handling
- **Statistics**: Real-time analytics and reporting

**Key Methods**:
- `getAllOnboardingData()`: Retrieve all onboarding records
- `addOnboardingRecord()`: Create new onboarding entry
- `updateOnboardingRecord()`: Modify existing records
- `searchOnboardingRecords()`: Advanced search functionality
- `exportToCSV()`: Data export capabilities
- `getOnboardingStats()`: Statistical analysis

### `app/utils/FileHandler.jsx`
**Purpose**: File management and preview utilities
**Features**:
- **File Preview**: Document preview functionality
- **File Type Detection**: Automatic format recognition
- **Download Management**: File download handling
- **Modal Integration**: Popup preview windows
- **Error Handling**: File processing error management

### `app/utils/FormValidator.js`
**Purpose**: Form validation and data integrity
**Features**:
- **Input Validation**: Comprehensive field validation
- **Error Messages**: User-friendly error display
- **GNPC ID Generation**: Automatic ID creation
- **Data Sanitization**: Input cleaning and formatting
- **Required Field Tracking**: Document completion monitoring

### `app/utils/ApplicantStatus.jsx`
**Purpose**: Applicant status management component
**Features**:
- **Status Updates**: Real-time status changes
- **Progress Tracking**: Application progress monitoring
- **Visual Indicators**: Status badges and icons
- **Action Buttons**: Status change controls
- **Confirmation Dialogs**: Status change confirmations

### `app/utils/Tables.jsx`
**Purpose**: Reusable table components
**Features**:
- **Sortable Columns**: Click-to-sort functionality
- **Filtering**: Column-based filtering
- **Pagination**: Large dataset handling
- **Responsive Design**: Mobile-friendly tables
- **Custom Styling**: Theme-aware table appearance

### `app/utils/Bcharts.jsx`
**Purpose**: Chart and visualization components
**Features**:
- **Data Visualization**: Charts and graphs
- **Real-time Updates**: Live data refresh
- **Interactive Elements**: Clickable chart elements
- **Responsive Design**: Mobile-friendly charts
- **Theme Integration**: Chart appearance adaptation

## ⚙️ Settings Components

### `app/settings/Account.jsx`
**Purpose**: Account management interface
**Features**:
- **Profile Information**: User profile display and editing
- **Security Settings**: Password and security management
- **Account Preferences**: User preference configuration
- **Data Export**: Account data export functionality

### `app/settings/Appearance.jsx`
**Purpose**: Visual appearance customization
**Features**:
- **Theme Selection**: Light/dark mode toggle
- **Color Schemes**: Custom color palette selection
- **Layout Options**: UI layout customization
- **Font Settings**: Typography customization

### `app/settings/Profile.jsx`
**Purpose**: User profile management
**Features**:
- **Personal Information**: Name, email, contact details
- **Avatar Management**: Profile picture upload
- **Bio Information**: Personal description
- **Social Links**: External profile links

### `app/settings/Preferences.jsx`
**Purpose**: User preference configuration
**Features**:
- **Notification Settings**: Alert preferences
- **Language Selection**: Multi-language support
- **Time Zone**: Time zone configuration
- **Accessibility**: Accessibility feature settings

### `app/settings/Security.jsx`
**Purpose**: Security and privacy settings
**Features**:
- **Password Management**: Password change functionality
- **Two-Factor Authentication**: 2FA setup and management
- **Session Management**: Active session control
- **Privacy Settings**: Data privacy configuration

## 📋 Application Management

### `app/applications/Status.jsx`
**Purpose**: Application status display component
**Features**:
- **Status Indicators**: Visual status representation
- **Progress Tracking**: Application progress display
- **Status History**: Timeline of status changes
- **Action Buttons**: Status update controls

### `app/applications/ViewApplicants.jsx`
**Purpose**: Applicant listing and management
**Features**:
- **Applicant List**: Comprehensive applicant table
- **Search & Filter**: Advanced filtering capabilities
- **Bulk Actions**: Mass applicant operations
- **Export Functionality**: Data export options

## 💬 Messaging System

### `app/messages/Send.jsx`
**Purpose**: Message composition and sending
**Features**:
- **Message Composition**: Rich text editor
- **File Attachments**: Document sharing
- **Recipient Selection**: User contact management
- **Message Templates**: Pre-written message templates
- **Draft Saving**: Auto-save draft messages

### `app/messages/Response.jsx`
**Purpose**: Message response and conversation management
**Features**:
- **Conversation Thread**: Message history display
- **Quick Replies**: Pre-written response templates
- **Message Actions**: Reply, forward, delete options
- **File Management**: Attachment handling
- **Real-time Updates**: Live message synchronization

## 🏗️ Management Components

### `app/manage/Site.jsx`
**Purpose**: Site configuration and management
**Features**:
- **Site Settings**: General site configuration
- **Content Management**: Site content editing
- **SEO Settings**: Search engine optimization
- **Analytics Integration**: Site analytics configuration

### `app/manage/Form.jsx`
**Purpose**: Form builder and management
**Features**:
- **Form Builder**: Drag-and-drop form creation
- **Field Management**: Form field configuration
- **Validation Rules**: Custom validation setup
- **Form Templates**: Pre-built form templates
- **Response Management**: Form submission handling

## 👨‍💼 Admin Interface

### `app/admin/page.jsx`
**Purpose**: Administrative dashboard
**Features**:
- **System Overview**: High-level system statistics
- **User Management**: User account administration
- **System Settings**: Global system configuration
- **Audit Logs**: System activity monitoring
- **Performance Metrics**: System performance tracking

## 👤 Applicant Details

### `app/applicant-details/[id]/page.jsx`
**Purpose**: Individual applicant detail view
**Features**:
- **Complete Profile**: Full applicant information
- **Document Management**: Document upload and preview
- **Status History**: Application timeline
- **Communication**: Direct messaging with applicant
- **Notes & Comments**: Internal notes system
- **Print Options**: GNPC form generation

## 🎯 Demo Site

### `app/demo-applicant-site/page.jsx`
**Purpose**: Demo applicant interface
**Features**:
- **Application Preview**: Sample application process
- **Feature Showcase**: System capabilities demonstration
- **User Experience**: Interface usability testing
- **Training Tool**: User training and onboarding

## 🖼️ Static Assets

### `public/images/gnpclogo.png`
**Purpose**: GNPC company logo
**Usage**: Official branding throughout the application

### `public/` SVG Files
**Purpose**: UI icons and graphics
**Files**:
- `file.svg`: File upload icons
- `globe.svg`: International/language icons
- `next.svg`: Next.js framework logo
- `vercel.svg`: Vercel platform logo
- `window.svg`: Window/interface icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Modern web browser

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd hrportal

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup
1. Ensure all dependencies are installed
2. Configure any environment variables if needed
3. Start the development server
4. Access the application at `http://localhost:3000`

## 🏗️ Development

### Project Structure
The application follows Next.js 13+ App Router conventions with:
- **App Router**: Modern Next.js routing system
- **Server Components**: Optimized for performance
- **Client Components**: Interactive UI elements
- **Context Providers**: Global state management
- **Utility Services**: Reusable business logic

### Key Technologies
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React features and hooks
- **Tailwind CSS**: Utility-first styling
- **Ant Design**: Professional UI components
- **Local Storage**: Client-side data persistence
- **TypeScript**: Type safety and development experience

### Development Workflow
1. **Component Development**: Create reusable UI components
2. **Service Integration**: Implement business logic services
3. **State Management**: Use React Context for global state
4. **Data Persistence**: Implement local storage solutions
5. **Testing**: Component and integration testing
6. **Deployment**: Production build and deployment

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured interface
- **Tablet**: Touch-optimized layout
- **Mobile**: Mobile-first design approach
- **Accessibility**: WCAG compliance features

## 🔒 Security Features

- **Input Validation**: Comprehensive form validation
- **Data Sanitization**: XSS prevention
- **Local Storage**: Secure client-side data storage
- **Error Handling**: Graceful error management
- **User Authentication**: Secure login system

## 🎨 Theming System

The application supports:
- **Light Theme**: Default light appearance
- **Dark Theme**: Dark mode for reduced eye strain
- **Custom Colors**: Brand-specific color schemes
- **Font Sizes**: Accessibility-focused typography
- **Compact Mode**: High-density UI option

## 📊 Data Management

### Local Storage
- **Persistent Data**: Application data survives browser sessions
- **User Preferences**: Theme and settings persistence
- **Application State**: Current application status
- **Document Storage**: File and document management

### Data Export/Import
- **CSV Export**: Data export for external analysis
- **Data Import**: Bulk data import capabilities
- **Backup/Restore**: Data backup and restoration
- **Data Validation**: Import data validation

## 🚀 Deployment

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deployment Options
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Static site hosting
- **AWS**: Cloud hosting solutions
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software developed for GNPC (Ghana National Petroleum Corporation).

## 🆘 Support

For technical support or feature requests:
- Create an issue in the repository
- Contact the development team
- Review the documentation

---

**Version**: 2.0.0  
**Last Updated**: December 2024  
**Maintained By**: HR Portal Development Team  
**Framework**: Next.js 15 with React 19  
**Styling**: Tailwind CSS + Ant Design 

**TEAM**
1. Gideon Asare Twum: Team Lead, Lead developer
2. Gloria Abah: UI/UX, Frontend dev
3. Hallel Priska: UI/UX, Frontend dev
4. Nicodemus Domfeh-Boateng: Security
5. Kwabena Ahinkorah: Documentation