import { Card } from "../../shared/ui/Card/Card";
import { useDeviceStore } from "../../services/deviceStore";

export default function Home() {
  const { getDeviceCount } = useDeviceStore();
  const { total, active } = getDeviceCount();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Главная</h1>
      <Card title="Состояние дома">
        <p>Устройств: {total}</p>
        <p>Активно: {active}</p>
      </Card>
    </div>
  );
}