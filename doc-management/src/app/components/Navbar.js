import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow top-0">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Doc Management System</a>
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/documents">
                                <a className="nav-link">Documents</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/upload">
                                <a className="nav-link">Upload</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}