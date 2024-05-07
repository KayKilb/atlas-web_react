// task_1/dashboard/src/utils.js

function getFullYear() {
    return new Date().getFullYear();
  }
  
  function getFooterCopy(isIndex) {
    if (isIndex) {
      return "Holberton School";
    } else {
      return "Holberton School main dashboard";
    }
  }
  
  export { getFullYear, getFooterCopy };
