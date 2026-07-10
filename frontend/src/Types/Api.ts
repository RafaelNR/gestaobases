export interface ApiResponse<T = unknown> {
	status: number;
	success: boolean;
	message?: string;
	response?: T;
	requestId?: string;
}
export interface ApiFieldError {
	field: string;
	message: string;
}

export interface ApiError {
	status: number;
	success: false;
	message: string;
	errors?: ApiFieldError[];
	requestId?: string;
}
