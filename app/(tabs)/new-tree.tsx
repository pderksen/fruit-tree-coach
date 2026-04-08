import { Redirect } from "expo-router";

/**
 * The "New Tree" tab acts as a shortcut — tapping it navigates
 * to the full add-tree form defined at /tree/new.
 */
export default function NewTreeTab() {
  return <Redirect href="/tree/new" />;
}
