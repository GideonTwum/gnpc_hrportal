import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Save, X, Move, Eye } from 'lucide-react';

const AdminFormManager = () => {
  const [formSections, setFormSections] = useState([
    {
      id: 1,
      title: "Personal Information",
      description: "Fields marked with * are required",
      type: "section",
      fields: [
        { id: 1, label: "First name", type: "text", required: true, placeholder: "" },
        { id: 2, label: "Last name", type: "text", required: true, placeholder: "" },
        { id: 3, label: "Email", type: "email", required: true, placeholder: "" },
        { id: 4, label: "Confirm your email", type: "email", required: true, placeholder: "" },
        { id: 5, label: "City", type: "text", required: true, placeholder: "" },
        { id: 6, label: "Phone number", type: "tel", required: true, placeholder: "" }
      ]
    },
    {
      id: 2,
      title: "Experience",
      description: "",
      type: "section",
      fields: [
        { id: 7, label: "Experience", type: "text", required: false, placeholder: "add experience.." }
      ]
    },
    {
      id: 3,
      title: "Education",
      description: "",
      type: "section",
      fields: [
        { 
          id: 8, 
          label: "School", 
          type: "select", 
          required: false, 
          options: ["Valley View University", "University Of Ghana", "Kwame Nkrumah University Of Science and Technology", "University Of Professional Studies", "University Of Cape Coast", "Central University", "Takoradi Technical University"]
        }
      ]
    },
    {
      id: 4,
      title: "Your Profiles",
      description: "Fields marked with* are required.",
      type: "section",
      fields: [
        { id: 9, label: "LinkedIn", type: "url", required: true, placeholder: "" },
        { id: 10, label: "Facebook", type: "url", required: true, placeholder: "" },
        { id: 11, label: "SnapChat", type: "url", required: true, placeholder: "" },
        { id: 12, label: "X(Twitter)", type: "url", required: true, placeholder: "" }
      ]
    },
    {
      id: 5,
      title: "Resume",
      description: "",
      type: "section",
      fields: [
        { id: 13, label: "Resume", type: "file", required: true, accept: ".pdf,.doc,.docx" }
      ]
    },
    {
      id: 6,
      title: "Message to the Hiring Team",
      description: "Let the corporation know about your interest working there",
      type: "section",
      fields: [
        { id: 14, label: "Message", type: "textarea", required: false, placeholder: "type your message here...." }
      ]
    }
  ]);

  const [editingSection, setEditingSection] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);

  const fieldTypes = [
    { value: "text", label: "Text Input" },
    { value: "email", label: "Email" },
    { value: "tel", label: "Phone" },
    { value: "url", label: "URL" },
    { value: "textarea", label: "Text Area" },
    { value: "select", label: "Dropdown" },
    { value: "file", label: "File Upload" },
    { value: "checkbox", label: "Checkbox" },
    { value: "radio", label: "Radio Button" }
  ];

  const addSection = () => {
    const newSection = {
      id: Date.now(),
      title: "New Section",
      description: "",
      type: "section",
      fields: []
    };
    setFormSections([...formSections, newSection]);
  };

  const updateSection = (sectionId, updates) => {
    setFormSections(formSections.map(section => 
      section.id === sectionId ? { ...section, ...updates } : section
    ));
  };

  const deleteSection = (sectionId) => {
    setFormSections(formSections.filter(section => section.id !== sectionId));
  };

  const addField = (sectionId) => {
    const newField = {
      id: Date.now(),
      label: "New Field",
      type: "text",
      required: false,
      placeholder: ""
    };
    
    setFormSections(formSections.map(section => 
      section.id === sectionId 
        ? { ...section, fields: [...section.fields, newField] }
        : section
    ));
  };

  const updateField = (sectionId, fieldId, updates) => {
    setFormSections(formSections.map(section => 
      section.id === sectionId 
        ? {
            ...section,
            fields: section.fields.map(field => 
              field.id === fieldId ? { ...field, ...updates } : field
            )
          }
        : section
    ));
  };

  const deleteField = (sectionId, fieldId) => {
    setFormSections(formSections.map(section => 
      section.id === sectionId 
        ? { ...section, fields: section.fields.filter(field => field.id !== fieldId) }
        : section
    ));
  };

  const moveSection = (sectionId, direction) => {
    const currentIndex = formSections.findIndex(s => s.id === sectionId);
    if (
      (direction === 'up' && currentIndex === 0) ||
      (direction === 'down' && currentIndex === formSections.length - 1)
    ) return;

    const newSections = [...formSections];
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    [newSections[currentIndex], newSections[targetIndex]] = [newSections[targetIndex], newSections[currentIndex]];
    setFormSections(newSections);
  };

  const renderFieldEditor = (sectionId, field) => {
    const isEditing = editingField === field.id;

    if (isEditing) {
      return (
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Field Label</label>
              <input
                type="text"
                value={field.label}
                onChange={(e) => updateField(sectionId, field.id, { label: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Field Type</label>
              <select
                value={field.type}
                onChange={(e) => updateField(sectionId, field.id, { type: e.target.value })}
                className="w-full p-2 border rounded"
              >
                {fieldTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Placeholder</label>
              <input
                type="text"
                value={field.placeholder || ''}
                onChange={(e) => updateField(sectionId, field.id, { placeholder: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={field.required}
                onChange={(e) => updateField(sectionId, field.id, { required: e.target.checked })}
                className="mr-2"
              />
              <label className="text-sm font-medium">Required Field</label>
            </div>
          </div>

          {field.type === 'select' && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Options (one per line)</label>
              <textarea
                value={field.options ? field.options.join('\n') : ''}
                onChange={(e) => updateField(sectionId, field.id, { options: e.target.value.split('\n').filter(o => o.trim()) })}
                className="w-full p-2 border rounded h-24"
                placeholder="Option 1&#10;Option 2&#10;Option 3"
              />
            </div>
          )}

          <div className="flex gap-2">
            <button
              onClick={() => setEditingField(null)}
              className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
            >
              <Save size={14} /> Save
            </button>
            <button
              onClick={() => setEditingField(null)}
              className="bg-gray-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
            >
              <X size={14} /> Cancel
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-50 p-3 rounded border group hover:bg-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-medium">{field.label}</span>
            {field.required && <span className="text-red-500 ml-1">*</span>}
            <span className="text-sm text-gray-500 ml-2">({field.type})</span>
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setEditingField(field.id)}
              className="text-blue-500 hover:text-blue-700 p-1"
            >
              <Edit3 size={14} />
            </button>
            <button
              onClick={() => deleteField(sectionId, field.id)}
              className="text-red-500 hover:text-red-700 p-1"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderSectionEditor = (section) => {
    const isEditing = editingSection === section.id;

    return (
      <div key={section.id} className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => updateSection(section.id, { title: e.target.value })}
                  className="text-xl font-bold w-full p-2 border rounded"
                />
                <textarea
                  value={section.description}
                  onChange={(e) => updateSection(section.id, { description: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Section description..."
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingSection(null)}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Save size={14} /> Save
                  </button>
                  <button
                    onClick={() => setEditingSection(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <X size={14} /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold">{section.title}</h2>
                {section.description && (
                  <p className="text-gray-600 text-sm">{section.description}</p>
                )}
              </div>
            )}
          </div>
          
          <div className="flex gap-1 ml-4">
            <button
              onClick={() => moveSection(section.id, 'up')}
              className="text-gray-500 hover:text-gray-700 p-1"
              title="Move Up"
            >
              <Move size={16} />
            </button>
            <button
              onClick={() => moveSection(section.id, 'down')}
              className="text-gray-500 hover:text-gray-700 p-1"
              title="Move Down"
            >
              <Move size={16} className="rotate-180" />
            </button>
            <button
              onClick={() => setEditingSection(section.id)}
              className="text-blue-500 hover:text-blue-700 p-1"
              title="Edit Section"
            >
              <Edit3 size={16} />
            </button>
            <button
              onClick={() => deleteSection(section.id)}
              className="text-red-500 hover:text-red-700 p-1"
              title="Delete Section"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {section.fields.map(field => renderFieldEditor(section.id, field))}
          
          <button
            onClick={() => addField(section.id)}
            className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-blue-400 hover:text-blue-500 flex items-center justify-center gap-2"
          >
            <Plus size={20} /> Add Field to Section
          </button>
        </div>
      </div>
    );
  };

  if (previewMode) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Preview Header */}
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Form Preview</h1>
          <button
            onClick={() => setPreviewMode(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Edit3 size={16} /> Back to Edit
          </button>
        </div>

        {/* Preview Content */}
        <div className="p-8 max-w-4xl mx-auto">
          {formSections.map(section => (
            <div key={section.id} className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
              {section.description && (
                <p className="text-gray-600 text-sm mb-4">{section.description}</p>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.fields.map(field => (
                  <div key={field.id} className="flex flex-col">
                    <label className="text-sm font-medium mb-1">
                      {field.label}
                      {field.required && <span className="text-red-500">*</span>}
                    </label>
                    
                    {field.type === 'textarea' ? (
                      <textarea
                        placeholder={field.placeholder}
                        className="p-2 border rounded-lg h-24"
                        disabled
                      />
                    ) : field.type === 'select' ? (
                      <select className="p-2 border rounded-lg" disabled>
                        <option>Select {field.label}</option>
                        {field.options?.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : field.type === 'file' ? (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
                        Choose file or drag and drop
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="p-2 border rounded-lg"
                        disabled
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Form Builder - Admin Panel</h1>
          <p className="text-gray-600">Manage your internship application form</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setPreviewMode(true)}
            className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Eye size={16} /> Preview Form
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          {formSections.map(section => renderSectionEditor(section))}
          
          <button
            onClick={addSection}
            className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-gray-500 hover:border-blue-400 hover:text-blue-500 flex items-center justify-center gap-2 text-lg"
          >
            <Plus size={24} /> Add New Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminFormManager;