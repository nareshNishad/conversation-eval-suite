import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
  handleMetricChange: (value: string) => void;
  selectedMetric: string;
  metrics: { id: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({
  handleMetricChange,
  selectedMetric,
  metrics,
}) => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <h1 className='text-2xl font-bold'>Chatbot Evaluation Dashboard</h1>
      <Select onValueChange={handleMetricChange} value={selectedMetric}>
        <SelectTrigger className='w-48'>
          <SelectValue placeholder='Select a metric' />
        </SelectTrigger>
        <SelectContent className='z-10 bg-white'>
          {metrics.map((metric) => (
            <SelectItem key={metric.id} value={metric.id}>
              {metric.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Header;
