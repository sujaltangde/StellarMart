import React, { useEffect } from 'react'
import { MetaData } from '../components/MetaData'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader'
import { myOrders as MyOrders } from '../actions/orderAction'
import { toast } from 'react-toastify'
import { MdLaunch } from 'react-icons/md'


export const Orders = () => {


  const dispatch = useDispatch()
  const { loading, myOrders } = useSelector(state => state.newOrder)
  const { me } = useSelector(state => state.user)

  const columns = [
    { field: 'id', headerName: 'Order ID', minWidth: 300, flex: 1, cellClassName:"font-medium" },
    {
      field: 'status', headerName: 'Status', minWidth: 150, flex: 0.5,
      cellClassName: (params) => {
        return params.status === "Delivered" ? "text-green-600" : "text-blue-600"
      }
    },
    { field: 'itemsQty', headerName: 'Items Qty', minWidth: 150, flex: 0.3 },
    { field: 'amount', headerName: 'Amount', minWidth: 150, flex: 0.5 },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.id}`}>
            <MdLaunch size={20} />
          </Link>
        );
      }
    }
  ];

  const rows = [
  ];

  myOrders &&
    myOrders.forEach(item => {
      rows.push(
        { id: (item._id), status: item.orderStatus, itemsQty: item.orderItems.length, amount: item.totalPrice }
      )
    });
  // console.log(myOrders)

  useEffect(() => {
    dispatch(MyOrders())
  }, [])


  return (
    <>

      <MetaData title="My Orders" />
      <div className='min-h-screen pt-14'>
        {(loading || me === null) ? (<Loader />) : (<div>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableRowSelectionOnClick
            className='md:px-12 md:py-3 py-1  '
            autoHeight
          />
          <p>{me.name}'s Orders</p>
        </div>)}
      </div >

    </>
  )
}
