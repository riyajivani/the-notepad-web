import React, { useRef, useState, useTransition } from "react";
import emailjs from "@emailjs/browser";

const DeleteUserAcc = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    delete_type: "account", // account | data
    contact_email: "",
    reason: "",
    data_to_delete: "",
  });

  const [isPending, startTransition] = useTransition();
  const [msg, setMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    startTransition(async () => {
      setMsg("");

      try {
        await emailjs.sendForm(
          "service_hs4w40k",
          "template_3y0cjca",
          formRef.current!,
          "4JNS7bw_HIs49icYy"
        );

        setMsg("Request sent successfully!");
        setForm({
          name: "",
          email: "",
          delete_type: "account",
          contact_email: "",
          reason: "",
          data_to_delete: "",
        });
        formRef.current?.reset();
      } catch (err) {
        console.error(err);
        setMsg("Failed to send request. Please try again.");
      }
    });
  };

  const isAccount = form.delete_type === "account";

  return (
    <div className="min-h-screen flex items-center justify-center bg-primaryBlue px-4">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-xl bg-background rounded-2xl shadow-xl p-8 mt-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textBlue text-center mb-4">
          Delete Account / Your Data
        </h2>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
          Choose what you want to delete and confirm your details.
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-textBlue mb-1">
            Name <span className="text-primaryRed">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoverBlue outline-none"
          />
        </div>

        {/* Registered Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-textBlue mb-1">
            Registered Email <span className="text-primaryRed">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoverBlue outline-none"
          />
        </div>

        {/* Delete Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-textBlue mb-1">
            What do you want to delete? <span className="text-primaryRed">*</span>
          </label>
          <select
            name="delete_type"
            value={form.delete_type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoverBlue outline-none bg-white"
          >
            <option value="account">Delete My Account</option>
            <option value="data">Delete Specific Data</option>
          </select>
        </div>

        {/* Conditional Fields */}
        {isAccount ? (
          <>
            {/* Contact Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-textBlue mb-1">
                Contact Email (optional)
              </label>
              <input
                type="email"
                name="contact_email"
                value={form.contact_email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoverBlue outline-none"
              />
            </div>

            {/* Reason */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-textBlue mb-1">
                Reason (optional)
              </label>
              <textarea
                name="reason"
                rows={4}
                value={form.reason}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoverBlue outline-none resize-none"
              />
            </div>
          </>
        ) : (
          <>
            {/* Data to delete */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-textBlue mb-1">
                What data do you want to delete?{" "}
                <span className="text-primaryRed">*</span>
              </label>
              <textarea
                name="data_to_delete"
                rows={4}
                value={form.data_to_delete}
                onChange={handleChange}
                required
                placeholder="e.g. notes from Jan 2024, profile info, attachments..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hoverBlue outline-none resize-none"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-primaryRed text-white font-semibold py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50"
        >
          {isPending ? "Submitting..." : "Request Deletion"}
        </button>

        {msg && (
          <p className="text-sm text-center mt-4 text-textBlue">
            {msg}
          </p>
        )}
      </form>
    </div>
  );
};

export default DeleteUserAcc;
