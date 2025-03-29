import React from 'react';
import { Inbox, Clock3, AlertCircle, CheckCircle } from 'lucide-react';

export const COLUMNS = [
  { title: "Todo", borderColor: "blue", hasIcon: true, status: "todo", icon: <Inbox size={18} /> },
  { title: "In Progress", borderColor: "amber", hasIcon: false, status: "inProgress", icon: <Clock3 size={18} /> },
  { title: "Testing", borderColor: "indigo", hasIcon: false, status: "testing", icon: <AlertCircle size={18} /> },
  { title: "Complete", borderColor: "green", hasIcon: false, status: "complete", icon: <CheckCircle size={18} /> }
];

export const CATEGORY_OPTIONS = ['Bug Fix', 'Feature', 'Documentation', 'Meeting', 'Administrative', 'Research'];
export const PRIORITY_OPTIONS = ['low', 'medium', 'high', 'urgent'];
export const EMPLOYEES = [
  { id: 1, name: 'John Doe', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', department: 'Marketing' },
  { id: 3, name: 'Mike Johnson', department: 'Sales' },
  { id: 4, name: 'Sarah Williams', department: 'HR' }
];