import React from 'react';
import { Link } from 'react-router';
import './FormFooter.css';

const FormFooter = () => (
  <div className="form-footer">
    <Link to='/'>&larr; To Dashboard</Link>
  </div>
);

export default FormFooter;
