import { ComboboxPopover } from "@/components/combobox-popover";
import { modules } from "@/features/module/services/module.service";

const ModulesCombobox = async () => {
  const mods = await modules.getAllModules();
  return <ComboboxPopover options={mods} label="Modul" />;
};

export default ModulesCombobox;
