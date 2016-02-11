/**
 * Created by yang on 2/10/16.
 *
 * TimeSync plot
 */
export interface Plot {
    project_id: number;
    tsa: number;
    plotid: number;
    lng: number;
    lat: number;
    is_complete: boolean;
    is_example: boolean;
}
