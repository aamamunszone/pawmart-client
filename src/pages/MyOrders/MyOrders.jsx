import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import Loader from '../../components/common/Loader/Loader';
import useAuth from '../../hooks/useAuth';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyOrders = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const { data } = await axiosPrivate.get(`/orders?email=${user.email}`);
        setOrders(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load your orders!');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user?.email, axiosPrivate]);

  const downloadReport = () => {
    if (!orders || orders.length === 0) {
      toast.error('No orders available to download!');
      return;
    }

    try {
      // Create PDF with landscape orientation
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      // Add title
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(37, 99, 235);
      doc.text('🐾 PawMart - My Orders Report', 14, 15);

      // Add user info
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);
      doc.text(`Customer: ${user?.displayName || user?.email}`, 14, 22);
      doc.text(`Email: ${user?.email}`, 14, 27);

      // Table columns
      const tableColumn = [
        'Product Name',
        'Buyer Name',
        'Price (৳)',
        'Qty',
        'Address',
        'Date',
        'Phone',
      ];

      // Table data
      const tableRows = orders.map((order) => [
        order.productName || order.listingName || 'N/A',
        order.buyerName || 'N/A',
        order.price === 0 ? 'Free Adoption' : `৳${order.price}`,
        order.quantity || 1,
        order.address || 'N/A',
        new Date(order.date).toLocaleDateString('en-GB'),
        order.phone || 'N/A',
      ]);

      // Generate table
      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 35,
        theme: 'striped',
        headStyles: {
          fillColor: [37, 99, 235],
          textColor: [255, 255, 255],
          fontSize: 11,
          fontStyle: 'bold',
          halign: 'center',
        },
        styles: {
          fontSize: 9,
          cellPadding: 4,
          halign: 'left',
          valign: 'middle',
        },
        alternateRowStyles: {
          fillColor: [240, 245, 255],
        },
        columnStyles: {
          0: { cellWidth: 60 },
          1: { cellWidth: 35 },
          2: { cellWidth: 30 },
          3: { cellWidth: 15 },
          4: { cellWidth: 55 },
          5: { cellWidth: 25 },
          6: { cellWidth: 30 },
        },
      });

      // Add footer
      const pageCount = doc.internal.getNumberOfPages();
      const pageHeight = doc.internal.pageSize.height;

      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(9);
        doc.setTextColor(150, 150, 150);
        doc.text(
          `Generated on: ${new Date().toLocaleString('en-GB')}`,
          14,
          pageHeight - 10
        );
        doc.text(
          `Page ${i} of ${pageCount}`,
          doc.internal.pageSize.width - 30,
          pageHeight - 10
        );
      }

      // Add summary
      const finalY = doc.lastAutoTable.finalY + 10;
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(33, 33, 33);
      doc.text(`Total Orders: ${orders.length}`, 14, finalY);

      // Save PDF
      const fileName = `PawMart-Orders-${new Date().getTime()}.pdf`;
      doc.save(fileName);
      toast.success('Report downloaded successfully! 📥');
    } catch (error) {
      console.error('PDF generation error:', error);
      toast.error('Failed to generate PDF. Please try again.');
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <title>{`PawMart | ${user?.displayName || 'User'}'s Orders`}</title>

      <div className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <motion.div
          className="relative bg-linear-to-br from-blue-600 via-cyan-500 to-teal-500 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              🛒 My Orders
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              View and manage all your adoption requests and purchases
            </motion.p>
          </div>

          {/* Decorative wave */}
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
        <div className="container mx-auto px-4 py-12 -mt-6">
          {orders.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-7xl md:text-8xl mb-6">😿</div>
              <h3 className="text-xl md:text-2xl font-bold text-base-content mb-2">
                No orders found
              </h3>
              <p className="text-base-content/70 mb-6 text-sm md:text-base">
                You haven't placed any orders yet.
              </p>
              <button
                onClick={() => (window.location.href = '/pets-supplies')}
                className="btn btn-primary"
              >
                Browse Pets & Supplies
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header with Download Button */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-base-content">
                    Total Orders:{' '}
                    <span className="text-primary">{orders.length}</span>
                  </h2>
                  <p className="text-base-content/70 text-sm mt-1">
                    All your adoption requests and purchases
                  </p>
                </div>
                <motion.button
                  onClick={downloadReport}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Report
                </motion.button>
              </div>

              {/* Table */}
              <div className="bg-base-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    <thead className="bg-linear-to-r from-blue-600 to-cyan-500 text-white">
                      <tr>
                        <th className="text-white">Product/Pet Name</th>
                        <th className="text-white">Buyer Name</th>
                        <th className="text-white">Price</th>
                        <th className="text-white">Quantity</th>
                        <th className="text-white">Address</th>
                        <th className="text-white">Date</th>
                        <th className="text-white">Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <motion.tr
                          key={order._id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                          <td className="font-medium">
                            {order.productName || order.listingName}
                          </td>
                          <td>{order.buyerName}</td>
                          <td>
                            {order.price === 0 ? (
                              <span className="badge badge-success gap-2">
                                🎁 Free Adoption
                              </span>
                            ) : (
                              <span className="font-semibold">
                                ৳{order.price}
                              </span>
                            )}
                          </td>
                          <td>
                            <span className="badge badge-outline">
                              {order.quantity}
                            </span>
                          </td>
                          <td
                            className="max-w-xs truncate"
                            title={order.address}
                          >
                            {order.address}
                          </td>
                          <td>
                            {new Date(order.date).toLocaleDateString('en-GB')}
                          </td>
                          <td>{order.phone}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Info Card */}
              <motion.div
                className="mt-6 bg-linear-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-base-content mb-1">
                      💡 Quick Tip
                    </h4>
                    <p className="text-base-content/70 text-sm">
                      You can download a detailed PDF report of all your orders
                      by clicking the "Download Report" button. This report
                      includes all order details and can be saved for your
                      records.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
