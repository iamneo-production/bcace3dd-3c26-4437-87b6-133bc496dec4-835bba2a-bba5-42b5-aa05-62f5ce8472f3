import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./AdminPannel.css";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";
import { useNavigate } from "react-router-dom";
import { Chart } from "chart.js";
import EarningsCharts from "./LineChart";
import {
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const productsData = [
  {
    name: "Handmade Craft 1",
    id: 1,
    price: 39.99,
    seller: "ArtisanA",
    images: "https://example.com/images/product1.jpg",
  },
  {
    name: "Handmade Craft 2",
    id: 2,
    price: 29.99,
    seller: "ArtisanB",
    images: "https://example.com/images/product2.jpg",
  },
  {
    name: "Handmade Craft 3",
    id: 3,
    price: 49.99,
    seller: "ArtisanC",
    images: "https://example.com/images/product3.jpg",
  },
  {
    name: "Handmade Craft 4",
    id: 4,
    price: 19.99,
    seller: "ArtisanD",
    images: "https://example.com/images/product4.jpg",
  },
  {
    name: "Handmade Craft 5",
    id: 5,
    price: 59.99,
    seller: "ArtisanE",
    images: "https://example.com/images/product5.jpg",
  },
  {
    name: "Handmade Craft 6",
    id: 6,
    price: 34.99,
    seller: "ArtisanF",
    images: "https://example.com/images/product6.jpg",
  },
  {
    name: "Handmade Craft 7",
    id: 7,
    price: 45.99,
    seller: "ArtisanG",
    images: "https://example.com/images/product7.jpg",
  },
  {
    name: "Handmade Craft 8",
    id: 8,
    price: 22.99,
    seller: "ArtisanH",
    images: "https://example.com/images/product8.jpg",
  },
  {
    name: "Handmade Craft 9",
    id: 9,
    price: 27.99,
    seller: "ArtisanI",
    images: "https://example.com/images/product9.jpg",
  },
  {
    name: "Handmade Craft 10",
    id: 10,
    price: 64.99,
    seller: "ArtisanJ",
    images: "https://example.com/images/product10.jpg",
  },
];

const customerData = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "555-555-5555",
  },
];

const orderData = [
  {
    id: 1,
    customer: "John Doe",
    product: "Handcrafted Pottery Set",
    quantity: 2,
    total: 100,
  },
  {
    id: 2,
    customer: "Alice Smith",
    product: "Wooden Coffee Table",
    quantity: 1,
    total: 50,
  },
  {
    id: 3,
    customer: "John Doe",
    product: "Abstract Canvas Painting",
    quantity: 3,
    total: 150,
  },
];

const artisanData = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  username: "johndoe123",
  email: "johndoe@example.com",
  phoneNumber: "+1 (123) 456-7890",
  address: {
    street: "123 Artisan Street",
    city: "Craftville",
    state: "Artisia",
    zip: "12345",
    country: "HandmadeLand",
  },
  skills: ["Pottery", "Woodworking", "Painting"],
  bio: "I'm a passionate artisan with a love for creating beautiful pottery, woodworking pieces, and unique paintings. I've been honing my craft for over a decade and take pride in handcrafting each item with care and attention to detail.",
  portfolio: [
    {
      title: "Handcrafted Pottery Set",
      description:
        "A set of hand-thrown pottery mugs and bowls, perfect for adding a touch of elegance to your dining table.",
      image: "https://example.com/images/pottery-set.jpg",
    },
    {
      title: "Wooden Coffee Table",
      description:
        "A custom-made wooden coffee table featuring intricate woodwork and a beautiful finish.",
      image: "https://example.com/images/wooden-coffee-table.jpg",
    },
    {
      title: "Abstract Canvas Painting",
      description:
        "An abstract canvas painting that explores the use of vibrant colors and shapes to evoke emotions.",
      image: "https://example.com/images/abstract-painting.jpg",
    },
  ],
};

const drawerWidth = 240;

const AdminPanel = () => {
  const user = useSelector(selectUser);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const email = user.user && user.user.email ? user.user.email : "Guest";
  const [showProducts, setShowProducts] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showEarningsChart, setShowEarningsChart] = useState(false);
  const [showDashboard, setshowDashboard] = useState(true);
  const navigate = useNavigate();
  const handleProductsClick = () => {
    setShowProducts(true);
    setShowCustomers(false);
    setShowOrders(false);
    setShowAddProduct(false);
    setShowProfile(false);
    setShowEarningsChart(false);
    setshowDashboard(false);
  };

  const handleCustomersClick = () => {
    setShowProducts(false);
    setShowCustomers(true);
    setShowOrders(false);
    setShowAddProduct(false);
    setShowProfile(false);
    setShowEarningsChart(false);
    setshowDashboard(false);
  };

  const handleOrdersClick = () => {
    setShowProducts(false);
    setShowCustomers(false);
    setShowOrders(true);
    setShowAddProduct(false);
    setShowProfile(false);
    setShowEarningsChart(false);
    setshowDashboard(false);
  };

  const handleAddProductClick = () => {
    setShowProducts(false);
    setShowCustomers(false);
    setShowOrders(false);
    setShowProfile(false);
    setShowAddProduct(true);
    setShowEarningsChart(false);
    setshowDashboard(false);
  };
  const handleProfileClick = () => {
    setShowProfile(true);
    setShowProducts(false);
    setShowCustomers(false);
    setShowOrders(false);
    setShowAddProduct(false);
    setShowEarningsChart(false);
    setshowDashboard(false);
  };
  const handleEarningsClick = () => {
    setShowProfile(false);
    setShowProducts(false);
    setShowCustomers(false);
    setShowOrders(false);
    setShowAddProduct(false);
    setshowDashboard(false);
    setShowEarningsChart(true);
  };
  const handelDashboardClick = () => {
    setShowProfile(false);
    setShowProducts(false);
    setShowCustomers(false);
    setShowOrders(false);
    setShowAddProduct(false);
    setshowDashboard(true);
    setShowEarningsChart(false);
  };
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Sales",
        data: [2000, 2200, 2500, 2800, 3000, 3200], // Replace with your actual sales data
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  const chartData = [
    { date: "2023-09-01", value: 100 },
    { date: "2023-09-02", value: 150 },
    { date: "2023-09-03", value: 200 },
    { date: "2023-09-04", value: 180 },
    { date: "2023-09-05", value: 250 },
    { date: "2023-09-06", value: 300 },
  ];

  const barChartData = [
    { name: "Category 1", value: 50 },
    { name: "Category 2", value: 80 },
    { name: "Category 3", value: 120 },
    { name: "Category 4", value: 60 },
    { name: "Category 5", value: 90 },
  ];

  const pieChartData = [
    { name: "Category 1", value: 50 },
    { name: "Category 2", value: 80 },
    { name: "Category 3", value: 120 },
    { name: "Category 4", value: 60 },
    { name: "Category 5", value: 90 },
  ];

  const weeklyData = [
    { week: "Week 1", earnings: 1000 },
    { week: "Week 2", earnings: 1500 },
    { week: "Week 3", earnings: 2000 },
    { week: "Week 4", earnings: 1800 },
    { week: "Week 5", earnings: 2200 },
    { week: "Week 6", earnings: 2800 },
    { week: "Week 7", earnings: 3000 },
  ];

  // Sample data for monthly earnings
  const monthlyData = [
    { month: "January", earnings: 5000 },
    { month: "February", earnings: 6000 },
    { month: "March", earnings: 7500 },
    { month: "April", earnings: 8200 },
    { month: "May", earnings: 9000 },
    { month: "June", earnings: 10000 },
    { month: "July", earnings: 11000 },
  ];

  // Sample data for yearly earnings
  const yearlyData = [
    { year: "2021", earnings: 30000 },
    { year: "2022", earnings: 40000 },
    { year: "2023", earnings: 55000 },
    { year: "2024", earnings: 60000 },
    { year: "2025", earnings: 70000 },
    { year: "2026", earnings: 75000 },
    { year: "2027", earnings: 80000 },
  ];

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.clear();
  };
  const totalSales = 5000;
  const totalProfit = 2000;
  const totalProducts = 10;
  const totalOrders = 25;
  const totalCustomers = 50;
  return (
    <div className="admin-panel">
      <Drawer
        className="drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h6" color="primary" className="user-greeting">
          Hello {email}
        </Typography>
        <List>
          <ListItem
            button
            onClick={() => {
              handleItemClick("Dashboard");
              handelDashboardClick();
            }}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={handleProductsClick}>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button onClick={handleCustomersClick}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
          </ListItem>
          <ListItem button onClick={handleOrdersClick}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button onClick={handleAddProductClick}>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Product" />
          </ListItem>
          <ListItem button onClick={handleProfileClick}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={handleEarningsClick}>
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Earnings" />
          </ListItem>
        </List>
        <div className="logout-button">
          <IconButton
            color="primary"
            aria-label="Logout"
            style={{ float: "right" }}
            onClick={handleLogout}
          >
            <ExitToAppIcon />
          </IconButton>
        </div>
      </Drawer>

      {showProducts && (
        <div className="products-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.id}</td>
                  <td>{product.price}</td>
                  <td>{product.seller}</td>
                  <td>{product.images}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showDashboard && (
        <div className="dashboard-data">
          <h2 className="h2-dashboard">Dashboard</h2>
          <div className="dashboard-stats">
            <p>Total Sales: ${totalSales}</p>
            <p>Total Profit: ${totalProfit}</p>
            <p>Total Products: {totalProducts}</p>
            <p>Total Orders: {totalOrders}</p>
            <p>Total Customers: {totalCustomers}</p>
            {/* You can add more data here as needed */}
          </div>

          {/* Line Chart */}
          <div className="dashboard-chart">
            <LineChart width={600} height={300} data={chartData}>
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              {/* Change grid line color */}
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#ffffff" />
              {/* Change line color to white */}
            </LineChart>
          </div>

          {/* Bar Chart */}
          <div className="dashboard-chart">
            <BarChart width={600} height={300} data={barChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />{" "}
              {/* Change grid line color */}
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#007bff" />{" "}
              {/* Change bar color to blue */}
            </BarChart>
          </div>

          {/* Pie Chart */}
          <div className="dashboard-chart">
            <PieChart width={600} height={300}>
              <Pie
                dataKey="value"
                data={pieChartData}
                cx={300}
                cy={150}
                outerRadius={100}
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`#${Math.floor(Math.random() * 16777215).toString(
                      16
                    )}`}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      )}
      {showCustomers && (
        <div className="customers-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showOrders && (
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showAddProduct && (
        <div>
          <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5 h-[795px]">
              <form className="add-product-form123">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="productName"
                      name="productName"
                      label="Product Name"
                      fullWidth
                      autoComplete="given-name"
                      InputProps={{
                        style: {
                          color: "white",
                          borderColor: "white",
                        },
                        inputProps: {
                          style: {
                            color: "white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="afteramount"
                      name="afteramount"
                      label="Amount"
                      fullWidth
                      InputProps={{
                        style: {
                          color: "white",
                          borderColor: "white",
                        },
                        inputProps: {
                          style: {
                            color: "white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="beforeamount"
                      name="beforeamount"
                      label="Amount"
                      fullWidth
                      InputProps={{
                        style: {
                          color: "white",
                          borderColor: "white",
                        },
                        inputProps: {
                          style: {
                            color: "white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="discount"
                      name="discount"
                      label="Discount"
                      fullWidth
                      InputProps={{
                        style: {
                          color: "white",
                          borderColor: "white",
                        },
                        inputProps: {
                          style: {
                            color: "white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="description"
                      name="description"
                      label="Description"
                      fullWidth
                      multiline
                      rows={4}
                      InputProps={{
                        style: {
                          color: "white",
                          borderColor: "white",
                        },
                        inputProps: {
                          style: {
                            color: "white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="highlights"
                      name="highlights"
                      label="Highlights"
                      fullWidth
                      multiline
                      rows={4}
                      InputProps={{
                        style: {
                          color: "white",
                          borderColor: "white",
                        },
                        inputProps: {
                          style: {
                            color: "white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="details"
                      name="details"
                      label="Details"
                      fullWidth
                      multiline
                      rows={4}
                      InputProps={{
                        style: {
                          color: "white",
                          borderColor: "white",
                        },
                        inputProps: {
                          style: {
                            color: "white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Button
                      sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                      size="large"
                      variant="contained"
                      type="submit"
                    >
                      Deliver Here
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </div>
      )}
      {showProfile && (
        <div>
          {/* <h2>Artisan Profile</h2> */}
          <div className="profile-details">
            <p>
              <strong>First Name:</strong> {artisanData.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {artisanData.lastName}
            </p>
            <p>
              <strong>Username:</strong> {artisanData.username}
            </p>
            <p>
              <strong>Email:</strong> {artisanData.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {artisanData.phoneNumber}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {`${artisanData.address.street}, ${artisanData.address.city}, ${artisanData.address.state}, ${artisanData.address.zip}, ${artisanData.address.country}`}
            </p>
            <p>
              <strong>Skills:</strong> {artisanData.skills.join(", ")}
            </p>
            <p>
              <strong>Bio:</strong> {artisanData.bio}
            </p>
            <h3>Portfolio:</h3>
            <ul>
              {artisanData.portfolio.map((item, index) => (
                <li key={index}>
                  <strong>Title:</strong>{" "}
                  <span style={{ color: "white" }}>{item.title}</span>
                  <br />
                  <strong>Description:</strong>{" "}
                  <span style={{ color: "white" }}>{item.description}</span>
                  <br />
                  {/* <img src={item.image} alt={item.title} width="200" height="150" /> */}
                </li>
              ))}
            </ul>
          </div>
          <Button>Update Profile</Button>
        </div>
      )}
      {showEarningsChart && (
        <EarningsCharts
          weeklyData={weeklyData}
          monthlyData={monthlyData}
          yearlyData={yearlyData}
        />
      )}
    </div>
  );
};

export default AdminPanel;
