import React from 'react';
import { X, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { useError } from '../contexts/ErrorContext';

function NotificationCenter() {
  const { errors, notifications, removeError, removeNotification } = useError();

  const getIcon = (type) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="w-5 h-5" />;
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  const getStyles = (type) => {
    switch (type) {
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const allNotifications = [
    ...errors.map(error => ({ ...error, type: 'error' })),
    ...notifications
  ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  if (allNotifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {allNotifications.map((notification) => (
        <div
          key={notification.id}
          className={`border rounded-lg p-4 shadow-lg transition-all duration-300 ${getStyles(notification.type)}`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              {getIcon(notification.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">
                {notification.message}
              </p>
              {notification.context && (
                <p className="text-xs mt-1 opacity-75">
                  {notification.context}
                </p>
              )}
            </div>
            <button
              onClick={() => {
                if (notification.type === 'error') {
                  removeError(notification.id);
                } else {
                  removeNotification(notification.id);
                }
              }}
              className="flex-shrink-0 ml-2 p-1 rounded hover:bg-black hover:bg-opacity-10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotificationCenter;

