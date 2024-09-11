import React, { useState } from 'react';

export const Schedule = () => {
  const hours = Array.from({ length: 14 }, (_, i) => i + 6);
  
  // State to manage the content of each cell
  const [schedule, setSchedule] = useState(
    Array(14).fill(Array(5).fill(''))
  );

  // Function to handle adding text to a cell
  const handleAddText = (rowIdx, colIdx) => {
    const newText = prompt('Enter text for this cell:');
    if (newText) {
      const updatedSchedule = schedule.map((row, i) => 
        row.map((cell, j) => (i === rowIdx && j === colIdx ? newText : cell))
      );
      setSchedule(updatedSchedule);
    }
  };

  // Function to handle deleting text from a cell
  const handleDeleteText = (rowIdx, colIdx) => {
    const updatedSchedule = schedule.map((row, i) => 
      row.map((cell, j) => (i === rowIdx && j === colIdx ? '' : cell))
    );
    setSchedule(updatedSchedule);
  };

  // Function to handle viewing information (demo)
  const handleViewInfo = (text) => {
    alert(`Information: ${text}`);
  };

  return (
    <div className="flex flex-col justify-center mb-12 w-[100vw]">
      <h2 className="w-[100%] text-2xl font-bold text-[#004E59]">Gestión de Usuarios</h2>
      <table className="table-auto border-collapse w-[95%]">
        <thead>
          <tr>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px]"></div></th>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px] text-black flex items-end justify-center">Lunes</div></th>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px] text-black flex items-end justify-center">Martes</div></th>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px] text-black flex items-end justify-center">Miércoles</div></th>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px] text-black flex items-end justify-center">Jueves</div></th>
            <th className="p-2 max-w-[100px]"><div className="min-h-[50px] text-black flex items-end justify-center">Viernes</div></th>
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, rowIdx) => (
            <tr key={hour}>
              <td className="text-black text-right align-text-top">{hour}:00</td>
              {[...Array(5)].map((_, colIdx) => (
                <td key={colIdx} className="bg-gray-200 border-4 border-[#004E59] min-w-[100px] relative">
                  <div className="min-h-[50px] text-black relative flex flex-col justify-between">
                    <div>{schedule[rowIdx][colIdx]}</div>
                    <div className="flex absolute bottom-1 right-1 space-x-2">
                      {schedule[rowIdx][colIdx] ? (
                        <>
                          {/* Information button */}
                          <button className="bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                            onClick={() => handleViewInfo(schedule[rowIdx][colIdx])}>i</button>
                          {/* Delete button */}
                          <button className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                            onClick={() => handleDeleteText(rowIdx, colIdx)}>x</button>
                        </>
                      ) : (
                        /* Add text button */
                        <button className="bg-[#004E59] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                          onClick={() => handleAddText(rowIdx, colIdx)}>+</button>
                      )}
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};