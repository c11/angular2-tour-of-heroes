/**
 * Created by yang on 2/10/16.
 */
export interface Task {
    project_id: number;
    project_code: string;
    project_name: string;
    description: string;
    contact: string;
    tsa: number;
    user_id: number;
    plot_size: number;
}
