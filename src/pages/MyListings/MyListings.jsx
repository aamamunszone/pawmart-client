import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container/Container';
import Loader from '../../components/common/Loader/Loader';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const MyListings = () => {
  const { user } = useAuth();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingListing, setEditingListing] = useState(null);
  const [editData, setEditData] = useState({
    name: '',
    category: '',
    price: '',
    location: '',
    date: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    const fetchUserListings = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/listings?email=${user.email}`
        );
        setListings(response.data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load your listings!');
      } finally {
        setLoading(false);
      }
    };
    fetchUserListings();
  }, [user.email]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/listings/${id}`);
        setListings((prev) => prev.filter((listing) => listing._id !== id));

        await Swal.fire({
          title: 'Deleted!',
          text: 'Your listing has been deleted.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete listing!',
          icon: 'error',
        });
      }
    }
  };

  const openEditModal = (listing) => {
    setEditingListing(listing);
    setEditData({
      name: listing.name,
      category: listing.category,
      price: listing.price,
      location: listing.location,
      date: listing.date.split('T')[0], // for input type=date
      description: listing.description,
      image: listing.image,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/listings/${editingListing._id}`,
        editData
      );
      setListings((prev) =>
        prev.map((l) => (l._id === editingListing._id ? response.data : l))
      );
      toast.success('Listing updated successfully!');
      setEditingListing(null);
    } catch (error) {
      console.error(error);
      toast.error('Failed to update listing!');
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <title>PawMart | My Listings</title>

      <div className="min-h-screen bg-base-100 py-12">
        <Container>
          <motion.h1
            className="text-4xl font-black mb-8 text-center text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🐾 My Listings
          </motion.h1>

          {listings.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-8xl mb-6">😿</div>
              <h3 className="text-2xl font-bold text-base-content mb-2">
                No listings found
              </h3>
              <p className="text-base-content/70">
                You haven't added any listings yet.
              </p>
            </motion.div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr key={listing._id} className="">
                      <td>
                        <img
                          src={listing.image}
                          alt={listing.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </td>
                      <td>{listing.name}</td>
                      <td>{listing.category}</td>
                      <td>
                        {listing.category === 'Pets'
                          ? '0'
                          : `৳ ${listing.price}`}
                      </td>
                      <td>{listing.location}</td>
                      <td>{new Date(listing.date).toLocaleDateString()}</td>
                      <td>
                        <div className="flex justify-center items-center gap-2">
                          <label
                            htmlFor="edit-listing-modal"
                            className="btn btn-sm btn-warning"
                            onClick={() => openEditModal(listing)}
                          >
                            Edit
                          </label>
                          <button
                            onClick={() => handleDelete(listing._id)}
                            className="btn btn-sm btn-error"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Container>

        {/* DaisyUI Modal */}
        {editingListing && (
          <input
            type="checkbox"
            id="edit-listing-modal"
            className="modal-toggle"
            checked
            readOnly
          />
        )}
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="edit-listing-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setEditingListing(null)}
            >
              ✕
            </label>
            <h3 className="text-lg font-bold mb-4">Edit Listing</h3>
            <form onSubmit={handleEditSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={editData.name}
                onChange={handleEditChange}
                className="input input-bordered w-full"
                required
              />
              <select
                name="category"
                value={editData.category}
                onChange={handleEditChange}
                className="select select-bordered w-full"
                required
              >
                <option>Pets</option>
                <option>Food</option>
                <option>Accessories</option>
                <option>Care Products</option>
              </select>
              {editData.category !== 'Pets' && (
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={editData.price}
                  onChange={handleEditChange}
                  className="input input-bordered w-full"
                  min={0}
                  required
                />
              )}
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={editData.location}
                onChange={handleEditChange}
                className="input input-bordered w-full"
                required
              />
              <input
                type="date"
                name="date"
                value={editData.date}
                onChange={handleEditChange}
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={editData.image}
                onChange={handleEditChange}
                className="input input-bordered w-full"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={editData.description}
                onChange={handleEditChange}
                className="textarea textarea-bordered w-full"
                required
              />
              <button type="submit" className="btn btn-primary mt-2">
                Update Listing
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyListings;
