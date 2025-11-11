import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import axios from 'axios';
import Container from '../../components/common/Container/Container';
import useAuth from '../../hooks/useAuth';

const AddListing = () => {
  const { user } = useAuth();
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

    // Price = 0 if category is Pets
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

    // Simple validation
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
      await axios.post('http://localhost:3000/listings', formData);
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
      <title>{'PawMart | Add Listing'}</title>

      <div className="min-h-screen bg-base-100 py-12">
        <Container className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🧺 Add New Listing
          </motion.h1>

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
                  formData.category === 'Pets'
                    ? 'bg-gray-100 cursor-not-allowed'
                    : ''
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

            {/* Email (readonly) */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Submit Button */}
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
