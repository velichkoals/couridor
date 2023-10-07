import { BOARD_SIZE, CELLS_COUNT } from "../consts";
import { Board } from "../model";
import { isCell } from "./cell";

export const generateBoard = (): Board => {
    return [
        ...new Array(BOARD_SIZE).fill(0).map((row, rowIndex) => {
            return new Array(isCell(rowIndex) ? BOARD_SIZE : CELLS_COUNT).fill(0).map((cell, cellIndex) => ({
                x: rowIndex,
                y: cellIndex,
                isCell: isCell(rowIndex) && isCell(cellIndex)
            }))
        })
    ]
}