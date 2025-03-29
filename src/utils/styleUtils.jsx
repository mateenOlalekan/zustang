export const getBorderColorClass = (color) => {
    switch(color) {
      case 'blue': return 'border-t-blue-500';
      case 'amber': return 'border-t-amber-500';
      case 'indigo': return 'border-t-indigo-500';
      case 'green': return 'border-t-green-500';
      default: return 'border-t-gray-500';
    }
  };
  
  export const getBgColorClass = (color) => {
    switch(color) {
      case 'blue': return 'bg-blue-50';
      case 'amber': return 'bg-amber-50';
      case 'indigo': return 'bg-indigo-50';
      case 'green': return 'bg-green-50';
      default: return 'bg-gray-50';
    }
  };
  
  export const getTextColorClass = (color) => {
    switch(color) {
      case 'blue': return 'text-blue-500 hover:text-blue-700';
      case 'amber': return 'text-amber-500 hover:text-amber-700';
      case 'indigo': return 'text-indigo-500 hover:text-indigo-700';
      case 'green': return 'text-green-500 hover:text-green-700';
      default: return 'text-gray-500 hover:text-gray-700';
    }
  };
  
  export const getPriorityColor = (priority) => {
    switch(priority) {
      case 'low': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'urgent': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  export const getPriorityColors = {
    low: "border-green-500 bg-green-50 text-green-700",
    medium: "border-yellow-500 bg-yellow-50 text-yellow-700",
    high: "border-orange-500 bg-orange-50 text-orange-700",
    urgent: "border-red-500 bg-red-50 text-red-700"
  };