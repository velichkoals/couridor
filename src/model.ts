export type Chip = {
	color: boolean;
	bordersLeft: number;
	// left(): void;
	// right(): void;
	// up(): void;
	// down(): void;
};

export type BoardCell = {
	x: number;
	y: number;
	isCell: boolean;
};

export type Border = {
	indexFrom: BoardCell;
	indexTo: BoardCell;
};

export type Board = [BoardCell, BoardCell];

export type BoardState = {
	activeChip: Chip;
	first: BoardCell;
	second: BoardCell;
	borders: Array<Border>;
};

export type BorderStep = {
	border: Border;
};

export type ChipStep = {
	index: BoardCell;
};

export type Step = ({ color: Chip } & BorderStep) | ChipStep;
