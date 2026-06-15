"use client";

import { FilterType } from "@/types/todo";

interface Props {
  filter: FilterType;
  onFilter: (f: FilterType) => void;
  activeCount: number;
  onClearCompleted: () => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "active", label: "진행 중" },
  { value: "completed", label: "완료" },
];

export default function TodoFilter({ filter, onFilter, activeCount, onClearCompleted }: Props) {
  return (
    <div className="flex items-center justify-between px-1">
      <span className="text-sm text-gray-400">{activeCount}개 남음</span>
      <div className="flex gap-1">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilter(f.value)}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              filter === f.value
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <button
        onClick={onClearCompleted}
        className="text-sm text-gray-400 hover:text-red-400 transition-colors"
      >
        완료 삭제
      </button>
    </div>
  );
}
