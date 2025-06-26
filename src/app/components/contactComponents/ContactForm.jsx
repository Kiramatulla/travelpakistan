export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl">
        {/* Get in Touch Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Get In Touch</h1>
          <p className="text-gray-600 mt-2">
            We are here to help you plan a perfect trip to Pakistan. Share your
            travel ideas, and we will turn them into reality.
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-xl p-8 grid md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div className="bg-teal-600 text-white rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="mb-6 text-sm">
                We offer expertly crafted tour experiences across Pakistan and
                ensure each tour package is discoverable online with engaging
                content and strong visibility — helping more adventurers find
                and trust us.
              </p>
              <div className="space-y-2">
                <p>📞 +923412141434</p>
                <p>WhatsApp +923412141434</p>
                <p>📧 info@violatourspk.com</p>
                <p>📧 karim@violatourspk.com</p>
                <p>📍 Gulmit Gojal Hunza Gilgit Baltistan</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            action="https://formsubmit.co/violatours.pk@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden fields for FormSubmit options (optional) */}
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.violatourspk.com/thank-you"
            />

            {[
              {
                label: "Your Name",
                name: "name",
                type: "text",
                required: true,
              },
              {
                label: "Email Address",
                name: "email",
                type: "email",
                required: true,
              },
              {
                label: "WhatsApp (Optional)",
                name: "whatsapp",
                type: "text",
                required: false,
              },
              {
                label: "Country Name",
                name: "country",
                type: "text",
                required: true,
              },
              {
                label: "Number of People",
                name: "people",
                type: "number",
                required: true,
              },
              {
                label: "Number of Days",
                name: "days",
                type: "number",
                required: true,
              },
              {
                label: "Location You Want to Visit",
                name: "location",
                type: "text",
                required: true,
              },
              {
                label: "Tour Starting Date",
                name: "startDate",
                type: "date",
                required: true,
              },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  required={field.required}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 focus:outline-none text-base"
                />
              </div>
            ))}

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Write Your Message Here
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 focus:outline-none text-base resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-semibold py-3 rounded-lg text-lg hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
