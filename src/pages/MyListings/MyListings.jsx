import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '../../components/common/Container/Container';
import Loader from '../../components/common/Loader/Loader';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import EditListingModal from '../../components/listing/EditListingModal/EditListingModal';

const MyListings = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosSecure();
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
    if (!user?.email) return;

    const fetchUserListings = async () => {
      try {
        setLoading(true);
        const { data } = await axiosPrivate.get(
          `/listings?email=${user.email}`
        );
        setListings(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load your listings!');
      } finally {
        setLoading(false);
      }
    };

    fetchUserListings();
  }, [user?.email, axiosPrivate]);

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
        await axiosPrivate.delete(`/listings/${id}`);
        setListings((prev) => prev.filter((l) => l._id !== id));
        await Swal.fire({
          title: 'Deleted!',
          text: 'Your listing has been removed successfully.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete the listing!',
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
      date: listing.date.split('T')[0],
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
      const { data } = await axiosPrivate.put(
        `/listings/${editingListing._id}`,
        editData
      );
      setListings((prev) =>
        prev.map((l) => (l._id === editingListing._id ? data : l))
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
      <title>{`PawMart | ${user?.displayName || 'User'}'s Listings`}</title>

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
              🐾 My Listings
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Manage your pet and product listings with ease
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

        {/* Main Content */}
        <Container className="py-12 -mt-6">
          {listings.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-7xl md:text-8xl mb-6">😿</div>
              <h3 className="text-xl md:text-2xl font-bold text-base-content mb-2">
                No listings found
              </h3>
              <p className="text-base-content/70 mb-6 text-sm md:text-base">
                You haven't added any listings yet.
              </p>
              <button
                onClick={() => (window.location.href = '/listings/create')}
                className="btn btn-primary rounded-full"
              >
                Add a New Listing
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-base-content">
                    Total Listings :{' '}
                    <span className="text-primary">{listings.length}</span>
                  </h2>
                  <p className="text-base-content/70 text-sm mt-1">
                    Manage all your published pet and product listings
                  </p>
                </div>
              </div>

              <div className="bg-base-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    <thead className="bg-linear-to-r from-blue-600 to-cyan-500 text-white">
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
                      {listings.map((listing, index) => (
                        <motion.tr
                          key={listing._id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                          <td>
                            <img
                              src={listing.image}
                              alt={listing.name}
                              className="w-20 h-20 object-cover rounded-xl"
                            />
                          </td>
                          <td className="font-semibold">{listing.name}</td>
                          <td>{listing.category}</td>
                          <td>
                            {listing.category === 'Pets' ? (
                              <span className="badge badge-success whitespace-nowrap rounded-full px-3 py-4">
                                🐶 Free
                              </span>
                            ) : (
                              <span className="font-semibold">
                                ৳ {listing.price}
                              </span>
                            )}
                          </td>
                          <td>{listing.location}</td>
                          <td>
                            {new Date(listing.date).toLocaleDateString('en-GB')}
                          </td>
                          <td>
                            <div className="flex gap-2 justify-center">
                              <label
                                htmlFor="edit-listing-modal"
                                className="btn btn-sm btn-warning rounded-md"
                                onClick={() => openEditModal(listing)}
                              >
                                Edit
                              </label>
                              <button
                                onClick={() => handleDelete(listing._id)}
                                className="btn btn-sm btn-error rounded-md"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </Container>

        {/* Edit Listing Modal */}
        <AnimatePresence>
          {editingListing && (
            <EditListingModal
              editingListing={editingListing}
              editData={editData}
              setEditingListing={setEditingListing}
              handleEditChange={handleEditChange}
              handleEditSubmit={handleEditSubmit}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MyListings;
