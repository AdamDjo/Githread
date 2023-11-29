import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import React from 'react';

const notFound = () => {
  return (
    <div className="py-8">
      <Alert>
        <AlertTriangle></AlertTriangle>
        <AlertTitle>Not found</AlertTitle>
        <AlertDescription>post not found.</AlertDescription>
      </Alert>
    </div>
  );
};
export default notFound;
