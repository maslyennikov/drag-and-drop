import { Layout } from 'react-grid-layout';

interface IStore {
    app: App
}

export interface App {
    activeConfigurationLayout: Layout[];
    configurationComponents: string[];
}

export default IStore;
