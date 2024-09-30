// photo.state.ts
import { IPhoto } from '@models';

// Define the state structure for the "Photos" feature
export interface PhotoState {
  photos: IPhoto[]; // List of photos
  loading: boolean; // Loading state for API requests
  error: any;       // Any errors that may occur
}

// Define the initial state for the feature
export const initialState: PhotoState = {
  photos: [],
  loading: false,
  error: null,
};
