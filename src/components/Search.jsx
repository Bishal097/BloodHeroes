/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [formData, setFormData] = useState({ district: "", bloodType: "" });
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [districts, setDistricts] = useState([]); // State to store all districts

  // Fetch all districts when component mounts
  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/state-and-uts/West Bengal/districts`
        );
        console.log(response.data);
        setDistricts(response.data); // Assuming the response has an array of districts
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };
    fetchDistricts();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { bloodType, district } = formData;
    setLoading(true);

    try {
      // Replace with the actual API URL and pass query parameters for bloodType, district, and location
      // const response = await axios.get(`${import.meta.env.VITE_API_URL}/public/search`, {
      //   params: {
      //     bloodType: bloodType,
      //     district: district,
      //   },
      // });
      const queryParams = {};

      if (bloodType) queryParams.bloodType = bloodType;
      if (district) queryParams.district = district;

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/public/search`,
        {
          params: queryParams,
        }
      );

      // Filter fetched data based on location and other criteria
      console.log(response.data);
      setTableData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Blood Availability Search</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "20px",
          display: "inline-block",
          textAlign: "left",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <label>
          District:
          <select
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            style={{ margin: "0 10px", padding: "8px", borderRadius: "4px" }}
          >
            <option value="">Select District</option>
            {districts.length > 0 ? (
              districts.map((district, index) => (
                <option key={index} value={district.name || district}>
                  {" "}
                  {/* Adjust depending on the API structure */}
                  {district.name || district}{" "}
                  {/* Adjust depending on the API structure */}
                </option>
              ))
            ) : (
              <option value="">Loading districts...</option>
            )}
          </select>
        </label>

        <br />
        <label>
          Blood Type:
          <select
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            style={{ margin: "0 10px", padding: "8px", borderRadius: "4px" }}
          >
            <option value="">Select Blood Type</option>
            <option value="A_POSITIVE">A+</option>
            <option value="B_POSITIVE">B+</option>
            <option value="O_POSITIVE">O+</option>
            <option value="AB_POSITIVE">AB+</option>
            <option value="A_NEGATIVE">A-</option>
            <option value="B_NEGATIVE">B-</option>
            <option value="O_NEGATIVE">O-</option>
            <option value="AB_NEGATIVE">AB-</option>
          </select>
        </label>

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Table */}
      {loading ? (
        <div>Loading...</div>
      ) : tableData.length > 0 ? (
        <table
          style={{
            marginTop: "30px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Serial No.
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Hospital Name
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Blood Availability
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Quantity
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Issue Date
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {index + 1}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {data.bloodBankName}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {data.bloodType}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {data.totalQuantity} ml
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {data.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          No data found
        </div>
      )}
    </div>
  );
};

export default Search;
