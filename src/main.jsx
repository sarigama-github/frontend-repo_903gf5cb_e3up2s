import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'

// Pages
import Products from './pages/Products'
import Social from './pages/Social'
import Freelancing from './pages/Freelancing'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import ServicesLayout from './pages/Services'
import { AIConsulting, AutomationAgents, ProductEngineering, CloudDevOps, DataAnalytics, SecurityCompliance } from './pages/service-pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />

        <Route path="/products" element={<Products />} />
        <Route path="/social" element={<Social />} />
        <Route path="/freelancing" element={<Freelancing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<ServicesLayout />}>
          <Route index element={<AIConsulting />} />
          <Route path="ai-consulting" element={<AIConsulting />} />
          <Route path="automation-&-agents" element={<AutomationAgents />} />
          <Route path="product-engineering" element={<ProductEngineering />} />
          <Route path="cloud-&-devops" element={<CloudDevOps />} />
          <Route path="data-&-analytics" element={<DataAnalytics />} />
          <Route path="security-&-compliance" element={<SecurityCompliance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
