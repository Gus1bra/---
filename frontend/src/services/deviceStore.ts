import { create } from "zustand";

/**
 * интерфейс устройства
 * @param id Уникальный идентификатор устройства
 * @param name Имя устройства
 * @param type Тип устройства
 * @param isOn Включено ли устройство
 */

interface IDevice {
  id: string; 
  name: string;
  type: "light" | "thermostat" | "camera" | "sensor";
  isOn: boolean;
}


/**
 * интерфейс состояния хранилища
 * @param devices Список всех устройств
 * @param addDevice Метод для добавления устройства
 * @param toggleDevice Метод для переключения состояния устройства
 * @param removeDevice Метод для удаления устройства
 * @param getDeviceCount Метод для gjkextybz rjkbxtcdnf ecnhjqcnd
 */

interface IDeviceState {
  devices: IDevice[];
  addDevice: (device: IDevice) => void;
  toggleDevice: (id: string) => void;
  removeDevice: (id: string) => void;
  getDeviceCount: () => { total: number; active: number };
}


export const useDeviceStore = create<IDeviceState>((set, get) => ({
  devices: [],
  addDevice: (device) => set((state) => ({ devices: [...state.devices, device] })),
  toggleDevice: (id) =>
    set((state) => ({
      devices: state.devices.map((device) =>
        device.id === id ? { ...device, isOn: !device.isOn } : device
      ),
    })),
  removeDevice: (id) =>
    set((state) => ({
      devices: state.devices.filter((d) => d.id !== id),
    })),
    getDeviceCount: () => {
      const devices = get().devices;
      return {
        total: devices.length,
        active: devices.filter((d) => d.isOn).length,
      };
    },
}));