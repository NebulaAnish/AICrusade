const handelErrorStatus = (statusCode: number) => {
    if (statusCode === 404) return "The requested resource was not found.";
    if (statusCode === 500)
      return "An internal server error occurred. Please try again later.";
  
    return "An unknown error occurred. Please contact support for assistance.";
  };
  
  export const handleApiError = (error: any) => {
    if (error.response) {
      const statusCode = error.response.status;
      return handelErrorStatus(statusCode);
    }
    if (error.request) {
      return "There was a problem with your request. Please check your network connection and try again.";
    }
  
    return "An unknown error occurred. Please try again later.";
  };
  