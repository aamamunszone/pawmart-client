import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Container from '../../components/common/Container/Container';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AddListing = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosSecure();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: 'Pets',
    price: 0,
    location: '',
    description: '',
    image: '',
    date: '',
    email: user?.email || '',
  });

  const [loading, setLoading] = useState(false);

  const categories = ['Pets', 'Food', 'Accessories', 'Care Products'];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'category') {
      setFormData((prev) => ({
        ...prev,
        category: value,
        price: value === 'Pets' ? 0 : prev.price,
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.category ||
      !formData.location ||
      !formData.description ||
      !formData.image ||
      !formData.date
    ) {
      toast.error('Please fill all required fields!');
      return;
    }

    try {
      setLoading(true);
      await axiosPrivate.post('/listings', formData);
      toast.success('Listing added successfully!');
      navigate('/shop');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add listing!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>PawMart | Add Listing</title>

      <div className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <motion.div
          className="relative bg-linear-to-br from-blue-600 via-cyan-500 to-teal-500 pt-14 pb-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Container className="text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              🧺 Add New Listing
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Add your pets or products and share with the PawMart community
            </motion.p>
          </Container>

          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M0 0L60 8C120 16 240 32 360 37.3C480 43 600 37 720 34.7C840 32 960 32 1080 37.3C1200 43 1320 53 1380 58.7L1440 64V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V0Z"
                className="fill-base-100"
              />
            </svg>
          </div>
        </motion.div>

        {/* Form Section */}
        <Container className="py-12 -mt-6 max-w-3xl">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-base-200 rounded-2xl shadow-xl p-8 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Product / Pet Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product or pet name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Price (BDT)</span>
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min={0}
                className={`input input-bordered w-full ${
                  formData.category === 'Pets' ? 'cursor-not-allowed' : ''
                }`}
                disabled={formData.category === 'Pets'}
                required={formData.category !== 'Pets'}
              />
            </div>

            {/* Location */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Location</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                className="textarea textarea-bordered w-full"
                rows={4}
                required
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Image URL</span>
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Pick Up Date */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Pick Up Date</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="input input-bordered w-full cursor-not-allowed"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Add Listing'}
              </button>
            </div>
          </motion.form>
        </Container>
      </div>
    </>
  );
};

export default AddListing;
