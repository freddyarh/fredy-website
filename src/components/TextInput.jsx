import React, { useEffect, useState } from 'react';

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

const numAspects = [
  {
    name: "Readability",
    votes: {
      upvote: 0,
      downvote: 0
    }
  },
  {
    name: "Performance",
    votes: {
      upvote: 0,
      downvote: 0
    }
  }
];

const [aspects, setAspects] = useState(numAspects);

const handleInputChange = (e) => {
  const inputValue = e.target.value;
  setInputText(inputValue);
  
  // Split the input into words
  const words = inputValue.split(' ');
  
  // Filter out omitted words
  const filteredWords = words.filter(word => !OMITTED_WORDS.includes(word.toLowerCase()));
  
  // Join the filtered words back together
  const filteredText = filteredWords.join(' ');
  
  // Update the state with the filtered text
  setInputTextOmit(filteredText);
};

const handleUpvote = (index) => {
  setAspects(prevAspects => {
    const newAspects = [...prevAspects];
    newAspects[index] = {
      ...newAspects[index],
      votes: {
        ...newAspects[index].votes,
        upvote: newAspects[index].votes.upvote + 1
      }
    };
    return newAspects;
  });
};

function EmployeeValidationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    employeeId: "",
    joiningDate: ""
  });

  const [errorMsg, setErrorMsg] = useState({
    name: "",
    email: "",
    employeeId: "",
    joiningDate: ""
  });

  const validateName = (value) => {
    let nameValue = value.trim();
    if (nameValue.length === 0) {
      return "Name is required";
    }
    if (nameValue.length < 4) {
      return "Name must be at least 4 characters long";
    }
    if (!/^[a-zA-Z\s]*$/.test(nameValue)) {
      return "Name can only contain letters and spaces";
    }
    return "";
  };

  const validateEmail = (value) => {
    if (value.length === 0) {
      return "Email is required";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Email must be a valid email address";
    }
    return "";
  };

  const validateEmployeeId = (value) => {
    if (value.length === 0) {
      return "Employee ID is required";
    }
    if (!/^\d{6}$/.test(value)) {
      return "Employee ID must be exactly 6 digits";
    }
    return "";
  };

  const validateJoiningDate = (value) => {
    if (value.length === 0) {
      return "Joining date is required";
    }
    const selectedDate = new Date(value);
    const today = new Date();
    if (selectedDate > today) {
      return "Joining date cannot be in the future";
    }
    return "";
  };

  // Validate all fields on component mount
  useEffect(() => {
    const initialErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      employeeId: validateEmployeeId(form.employeeId),
      joiningDate: validateJoiningDate(form.joiningDate)
    };
    setErrorMsg(initialErrors);
  }, []); // Empty dependency array means this runs once on mount

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    
    // Update form state
    setForm(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate and update errors
    let errorMessage = "";
    switch (name) {
      case "name":
        errorMessage = validateName(value);
        break;
      case "email":
        errorMessage = validateEmail(value);
        break;
      case "employeeId":
        errorMessage = validateEmployeeId(value);
        break;
      case "joiningDate":
        errorMessage = validateJoiningDate(value);
        break;
      default:
        break;
    }

    setErrorMsg(prev => ({
      ...prev,
      [name]: errorMessage
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields on submit
    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      employeeId: validateEmployeeId(form.employeeId),
      joiningDate: validateJoiningDate(form.joiningDate)
    };

    setErrorMsg(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    
    if (!hasErrors) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", form);
      // Add your submission logic here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="layout-column align-items-center mt-20">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className={`w-100 ${errorMsg.name ? 'error-input' : ''}`}
          type="text"
          name="name"
          value={form.name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={handleInputChange}
        />
        {errorMsg.name && (
          <p className="error mt-2">{errorMsg.name}</p>
        )}
      </div>

      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className={`w-100 ${errorMsg.email ? 'error-input' : ''}`}
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        {errorMsg.email && (
          <p className="error mt-2">{errorMsg.email}</p>
        )}
      </div>

      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className={`w-100 ${errorMsg.employeeId ? 'error-input' : ''}`}
          type="text"
          name="employeeId"
          value={form.employeeId}
          placeholder="Employee ID"
          onChange={handleInputChange}
        />
        {errorMsg.employeeId && (
          <p className="error mt-2">{errorMsg.employeeId}</p>
        )}
      </div>

      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className={`w-100 ${errorMsg.joiningDate ? 'error-input' : ''}`}
          type="date"
          name="joiningDate"
          value={form.joiningDate}
          onChange={handleInputChange}
        />
        {errorMsg.joiningDate && (
          <p className="error mt-2">{errorMsg.joiningDate}</p>
        )}
      </div>

      <button 
        data-testid="submit-btn" 
        type="submit"
        className="submit-button"
      >
        Submit
      </button>
    </form>
  );
}

export default EmployeeValidationForm;

// Function to find minimum jumps to reach the end
const jump = (nums) => {
  // If array has less than 2 elements, no jumps needed
  if (nums.length < 2) return 0;
  
  let jumps = 0;        // Count of jumps
  let currentEnd = 0;   // Current farthest position we can reach
  let farthest = 0;     // Farthest position we can reach from current position
  
  // We don't need to check the last element
  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest position we can reach
    farthest = Math.max(farthest, i + nums[i]);
    
    // If we've reached the current end, we need to make a jump
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }
  
  return jumps;
};

// Example usage:
const nums1 = [2, 3, 1, 1, 4];
console.log(jump(nums1)); // Output: 2
// Explanation: 
// Jump 1: 0 -> 2 (nums[0] = 2)
// Jump 2: 2 -> 4 (nums[2] = 1)

const nums2 = [2, 3, 0, 1, 4];
console.log(jump(nums2)); // Output: 2
// Explanation:
// Jump 1: 0 -> 2 (nums[0] = 2)
// Jump 2: 2 -> 4 (nums[2] = 0)

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function UserTable() {
  const [data, setData] = useState<User[]>([]);
  const [filtro, setFiltro] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once on mount

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFiltro(value);
  };

  // Filter data based on search input
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(filtro.toLowerCase()) ||
    item.username.toLowerCase().includes(filtro.toLowerCase()) ||
    item.email.toLowerCase().includes(filtro.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <div>
        <h1>Ingrese filtro</h1>
        <input
          title="filtro"
          name="filtro"
          value={filtro}
          onChange={handleInput}
          placeholder="Search users..."
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

//