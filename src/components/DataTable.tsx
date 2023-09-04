import { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90 },
  { field: 'make', headerName: 'Make', flex: 1 },
  { field: 'model', headerName: 'Model', flex: 1},
  { field: 'color', headerName: 'Color', flex: 1},
  { field: 'year', headerName: 'Year', flex: 1}
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { contactData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
  }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-zinc-950 m-3 border rounded border-gray-600 text-gray-600 hover:bg-zinc-800 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    Enter New Car
                </button>
            </div>
            <Button onClick={handleOpen} className="p-3 bg-zinc-950 m-3 border rounded border-gray-600 text-gray-600 hover:bg-zinc-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-zinc-950 m-3 border rounded border-gray-600 text-gray-600 hover:bg-zinc-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 400, width: '100%' }}
          >
            <h2 className="p-3 bg-zinc-950 mb-3 border rounded border-gray-600 text-gray-600">Cars</h2>
            <DataGrid rows={contactData} columns={columns}
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable