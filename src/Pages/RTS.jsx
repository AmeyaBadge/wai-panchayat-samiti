import React, { useState, useEffect } from "react";

const RTS = () => {
  const pdfFile = "/documents/RTI.pdf"; // Verify this path exists in public folder

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow px-4 py-6 w-full">
        <div className="mx-auto bg-white rounded-lg shadow-md max-w-4xl">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 gap-3 border-b">
            <h1 className="text-xl sm:text-2xl font-bold text-navy">
              Right to Public Services (RTS)
            </h1>
          </div>

          {/* PDF Viewer Section */}
          <div className="p-4">
            <img src="/documents/RTS.jpg" alt="" />
          </div>

          {/* Submission Instructions */}
          {/* <div className="p-4 sm:p-6 border-t">
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-navy mb-3">
                How to Submit Your RTI Application
              </h2>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
                <li>Download and print the RTI form</li>
                <li>Fill in all required details completely</li>
                <li>Attach ₹10 court fee stamp</li>
                <li>
                  Submit to Panchayat Office in person or by registered post
                </li>
                <li>You will receive a response within 30 days</li>
              </ol>
              <div className="mt-4 p-3 sm:p-4 bg-white rounded border border-blue-200 text-sm sm:text-base">
                <h3 className="font-medium text-blue-800">
                  RTI Officer Contact
                </h3>
                <p className="mt-1">Shri. Rajesh Patil</p>
                <p>Wai Panchayat Office, Satara District</p>
                <p>Phone: 02162-XXXXXX</p>
                <p>Email: rti.wai@mahapanchayat.gov.in</p>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default RTS;
