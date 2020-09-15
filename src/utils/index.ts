type Products = 
    Wire &
    Battery &
    Camera &
    analogVideoRecorder &
    IPVideoRecorder &
    HybridVideoRecorder &
    Switch &
    PowerSupply

type CommonProps = {
    id: string;
    name: string;
    companyManufacturer: string;
    price: number;
}

type Electro = {
    powerSupplyType: string;
    energyConsumption: number;
    voltage: string;
    ampere: number;
}

type PoeSupport = {
    poe: boolean;
    quantityPoeInputs: number | null
}

type Wire = {
    id: string;
    name: string;
    sectionDiameter: string;
    price: number;
}

type Battery = 
    CommonProps & {
        ratedVoltage: string;
        ratedCapacity: string;
    }

type Camera = 
    CommonProps & 
    Electro & 
    PoeSupport & {
        cameraResolution: string;
        connectionType: string;
        signalFormat: string;
        shellType: string;
        infrored: boolean;
        audioOutputs: boolean;
        lensType: string;
    }

type VideoRecorderCommonProps = {
    recordingFormat: string;
    recordingPermission: string;
    maxHddVolume: number;
    quantityBuiltHdd: number;
    quantityHdd: number;
    quantityAudioOutputs: string;
    }

type analogVideoRecorderCommonProps = {
    resolutionCamerasAnalog: string;
    quantityOfConnectionsAnalog: number;
    }

type IPVideoRecorderCommonProps = {
    resolutionCamerasIP: string;
    quantityOfConnectionsIP: number;
    }

type analogVideoRecorder =
    CommonProps & 
    Electro & 
    VideoRecorderCommonProps & 
    analogVideoRecorderCommonProps

type IPVideoRecorder =
    CommonProps &
    Electro & 
    VideoRecorderCommonProps &
    IPVideoRecorderCommonProps

type HybridVideoRecorder =
    CommonProps &
    Electro & 
    VideoRecorderCommonProps &
    analogVideoRecorderCommonProps &
    IPVideoRecorderCommonProps

type PowerSupply = 
    CommonProps & 
    Electro & {
        dimensions: string;
    }

type Switch =
    CommonProps &
    Electro & 
    PoeSupport & {
        quantityInputs: number;
        baudRate: string;
    }



class Utils {
    /*tabsList = [
        {
            id: 'workTypes',
            name: 'workTypes',
            composition: [
                {
                id: 'skud',
                name: 'СКУД'
            },
            {
                id: 'ops',
                name: 'ОПС'
            },
            {
                id: 'video',
                name: 'Видео наблюдение',
            },
            {
                id: 'domo',
                name: 'Домофония'
            },
            {
                id: 'smartHome',
                name: 'Умный дом'
            }
            ]
        },
        {
            id: 'video',
            name: 'Video',
            composition: [
            {
                id: 'cams',
                name: 'Камеры'
            },
            {
                id: 'regs',
                name: 'регистраторы'
            },
            {
                id: 'kabs',
                name: "кабель"
            }
            ]
        }
    ]*/
    
}

export const utils = new Utils();