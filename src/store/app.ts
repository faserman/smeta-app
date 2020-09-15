import { observable, action } from 'mobx';
import { utils } from '../utils/index';

class AppStore {
    @observable tabsList: [] = [];
    @observable createNewEstimateFooter: boolean = true;
    @observable listWorkTypesId: string = 'workTypes';

    @action
    setWorkTypes(result: any) {
        this.tabsList = result;
        console.log(result[0].id);
    };

    @action
    setCreateNewEstimateFooter(result: boolean) {
        this.createNewEstimateFooter = result;
    };

    @action
    setListWorkTypesId(id: string) {
        this.listWorkTypesId = id;
    };

    @action
    clearListWorkTypes() {
        this.listWorkTypesId = '';
    };

    @action.bound
    toggleTabsList(id: string) {
        this.clearListWorkTypes();
        this.setListWorkTypesId(id);
    }

    @action.bound
    gettingWorkTypes() {
        /*try {
            const result = utils.tabsList
            this.setWorkTypes(result);
        } catch(error) {
            console.log(error);
        }*/
    }
}

export const appStore = new AppStore();