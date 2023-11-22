import { CircularProgress } from "@mui/material";

const FlashPage = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent:"center",
        height:"100vh",
        alignItems:"center"
    }}>
        <CircularProgress />
    </div>
  )
}

export default FlashPage