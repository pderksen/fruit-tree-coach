import { useState, useMemo } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { FruitIcon } from "@/components/FruitIcon";
import {
  FRUIT_TREE_TYPES,
  POPULAR_TYPES,
  TREE_CATEGORY_MAP,
} from "@/lib/fruit-tree-data";
import type { FruitTreeType } from "@/lib/types";

interface FruitTypeGridProps {
  selected: FruitTreeType | null;
  onSelect: (type: FruitTreeType) => void;
  zone?: string;
}

export function FruitTypeGrid({ selected, onSelect }: FruitTypeGridProps) {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);

  const popularTypes = POPULAR_TYPES;

  const allNonPopular = useMemo(() => {
    const popularSet = new Set<FruitTreeType>(popularTypes);
    return FRUIT_TREE_TYPES.filter((t) => !popularSet.has(t));
  }, [popularTypes]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return FRUIT_TREE_TYPES;
    return FRUIT_TREE_TYPES.filter((t) => t.toLowerCase().includes(q));
  }, [search]);

  const isSearching = search.trim().length > 0;

  const grouped = useMemo(() => {
    const types = isSearching
      ? filtered.filter((t) => !popularTypes.includes(t) || isSearching)
      : allNonPopular;
    const map = new Map<string, FruitTreeType[]>();
    for (const t of types) {
      const cat = TREE_CATEGORY_MAP[t];
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(t);
    }
    return Array.from(map.entries());
  }, [isSearching, filtered, allNonPopular, popularTypes]);

  return (
    <View>
      {/* Popular types (zone-aware) */}
      {!isSearching && (
        <>
          <Text className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
            Most popular
          </Text>
          <TypeRow types={popularTypes} selected={selected} onSelect={onSelect} />
        </>
      )}

      {/* "Look for more" prompt or search results */}
      {!isSearching && !expanded && (
        <Pressable
          className="mt-4 flex-row items-center justify-center py-2"
          onPress={() => setExpanded(true)}
        >
          <Ionicons name="search-outline" size={16} color="#16a34a" />
          <Text className="ml-1.5 text-sm font-semibold text-brand-600">
            Look for more trees
          </Text>
        </Pressable>
      )}

      {/* Search input — shown when expanded or searching */}
      {(expanded || isSearching) && (
        <View className="mt-4 mb-2 flex-row items-center rounded-xl border border-gray-300 bg-white px-3 py-2.5">
          <Ionicons name="search-outline" size={18} color="#9ca3af" />
          <TextInput
            className="ml-2 flex-1 text-base text-gray-900"
            placeholder="Search all tree types..."
            placeholderTextColor="#9ca3af"
            value={search}
            onChangeText={setSearch}
            autoCorrect={false}
            autoFocus={expanded && !isSearching}
          />
        </View>
      )}

      {/* Searching: show all matching results */}
      {isSearching && (
        <>
          <TypeRow types={filtered} selected={selected} onSelect={onSelect} />
          {filtered.length === 0 && (
            <Text className="py-6 text-center text-sm text-gray-400">
              No matching tree types
            </Text>
          )}
        </>
      )}

      {/* Expanded (not searching): show categorized groups */}
      {expanded && !isSearching &&
        grouped.map(([category, types]) => (
          <View key={category} className="mt-4">
            <Text className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
              {category}
            </Text>
            <TypeRow types={types} selected={selected} onSelect={onSelect} />
          </View>
        ))}

      {/* Collapse */}
      {expanded && !isSearching && (
        <Pressable
          className="mt-4 items-center py-2"
          onPress={() => {
            setExpanded(false);
            setSearch("");
          }}
        >
          <Text className="text-sm font-semibold text-brand-600">Show fewer</Text>
        </Pressable>
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
            <FruitIcon type={type} size={32} />
            <Text className="mt-1 text-xs font-semibold text-gray-800">
              {type}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
