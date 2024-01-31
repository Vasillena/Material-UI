// import { useState } from "react";
// import { Box, TextField } from "@mui/material";
// import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";

// const MuiDateRangePicker = () => {
//   const [value, setValue] = useState<DateRange<Date>>([null, null]);
//   console.log("value", value);

//   return (
//     <Box width="500px">
//       <DateRangePicker
//         startText="Check-in"
//         endText="Check-out"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(startProps, endProps) => (
//           <>
//             <TextField {...startProps} />
//             <Box sx={{ mx: 2 }}> to </Box>
//             <TextField {...endProps} />
//           </>
//         )}
//       />
//     </Box>
//   );
// };

// export default MuiDateRangePicker;
