import { useState, useMemo } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  FRUIT_TREE_TYPES,
  POPULAR_TYPE_COUNT,
  TREE_CATEGORY_MAP,
  TREE_EMOJI,
} from "@/lib/fruit-tree-data";
import type { FruitTreeType } from "@/lib/types";

interface FruitTypeGridProps {
  selected: FruitTreeType | null;
  onSelect: (type: FruitTreeType) => void;
}

export function FruitTypeGrid({ selected, onSelect }: FruitTypeGridProps) {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return FRUIT_TREE_TYPES;
    return FRUIT_TREE_TYPES.filter((t) => t.toLowerCase().includes(q));
  }, [search]);

  const isSearching = search.trim().length > 0;
  const popular = filtered.slice(0, POPULAR_TYPE_COUNT);
  const rest = filtered.slice(POPULAR_TYPE_COUNT);

  const grouped = useMemo(() => {
    const map = new Map<string, FruitTreeType[]>();
    for (const t of rest) {
      const cat = TREE_CATEGORY_MAP[t];
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(t);
    }
    return Array.from(map.entries());
  }, [rest]);

  return (
    <View>
      {/* Search */}
      <View className="mb-4 flex-row items-center rounded-xl border border-gray-300 bg-white px-3 py-2.5">
        <Ionicons name="search-outline" size={18} color="#9ca3af" />
        <TextInput
          className="ml-2 flex-1 text-base text-gray-900"
          placeholder="Search tree types..."
          placeholderTextColor="#9ca3af"
          value={search}
          onChangeText={setSearch}
          autoCorrect={false}
        />
      </View>

      {/* Popular / search results */}
      {!isSearching && popular.length > 0 && (
        <Text className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
          Popular
        </Text>
      )}
      <TypeRow types={popular} selected={selected} onSelect={onSelect} />

      {/* Expanded categories (shown when "Show all" or searching) */}
      {(showAll || isSearching) &&
        grouped.map(([category, types]) => (
          <View key={category} className="mt-4">
            <Text className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
              {category}
            </Text>
            <TypeRow types={types} selected={selected} onSelect={onSelect} />
          </View>
        ))}

      {/* Toggle */}
      {!isSearching && rest.length > 0 && (
        <Pressable
          className="mt-4 items-center py-2"
          onPress={() => setShowAll((v) => !v)}
        >
          <Text className="text-sm font-semibold text-brand-600">
            {showAll ? "Show fewer" : `Show all ${FRUIT_TREE_TYPES.length} types`}
          </Text>
        </Pressable>
      )}

      {filtered.length === 0 && (
        <Text className="py-6 text-center text-sm text-gray-400">
          No matching tree types
        </Text>
      )}
    </View>
  );
}

function TypeRow({
  types,
  selected,
  onSelect,
}: {
  types: FruitTreeType[];
  selected: FruitTreeType | null;
  onSelect: (type: FruitTreeType) => void;
}) {
  return (
    <View className="flex-row flex-wrap gap-2">
      {types.map((type) => {
        const isSelected = selected === type;
        const emoji = TREE_EMOJI[type] ?? "\uD83C\uDF33";
        return (
          <Pressable
            key={type}
            className={`items-center rounded-2xl bg-white px-4 py-3 ${
              isSelected
                ? "border-2 border-brand-600"
                : "border-2 border-transparent"
            }`}
            onPress={() => onSelect(type)}
          >
            <Text className="text-2xl">{emoji}</Text>
            <Text className="mt-1 text-xs font-semibold text-gray-800">
              {type}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
