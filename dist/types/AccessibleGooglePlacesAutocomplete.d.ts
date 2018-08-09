/// <reference types="googlemaps" />
import * as React from 'react';
interface IAccessibleGooglePlacesAutocompleteOptions {
    bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
    componentRestrictions?: google.maps.places.ComponentRestrictions;
    location?: google.maps.LatLng;
    offset?: number;
    radius?: number;
    types?: string[];
}
interface IAccessibleGooglePlacesAutocompleteProps {
    googlePlacesApiKey: string;
    googlePlacesOptions?: IAccessibleGooglePlacesAutocompleteOptions;
    id: string;
    minLength?: number;
    onConfirm?: (placeResult: google.maps.places.PlaceResult) => void;
    onError?: (error: any) => void;
    t?: any;
    useMoreAccuratePostalCode?: boolean;
}
interface IAccessibleGooglePlacesAutocompleteState {
    apiLoaded: boolean;
}
export declare class AccessibleGooglePlacesAutocomplete extends React.Component<IAccessibleGooglePlacesAutocompleteProps, IAccessibleGooglePlacesAutocompleteState> {
    private geocoderService?;
    private autocompleteService?;
    private placesService?;
    private predictions;
    private currentStatusMessage;
    constructor(props: IAccessibleGooglePlacesAutocompleteProps);
    onAutoCompleteSelect: (value: string) => Promise<void>;
    onApiLoad(): void;
    getNoResultsMessage(): string;
    getStatusSelectedOptionMessage(selectedOption: string): string;
    getStatusNoResultsMessage(): string;
    getStatusResultsMessage(length: number, contentSelectedOption: string): string;
    getSuggestions(query: string, populateResults: any): void;
    render(): JSX.Element;
    private getPlaceDetails;
    private getReverseGeocodeData;
}
export {};
