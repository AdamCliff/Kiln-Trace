import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function PresetSelectMenu({
  preset,
  setPreset,
  presetList,
}: {
  preset: string;
  setPreset: React.Dispatch<React.SetStateAction<string>>;
  presetList: string[] | undefined;
}) {
  return (
    <>
      <Select onValueChange={(value) => setPreset(value)} value={preset}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select a material" />
        </SelectTrigger>
        <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
          {presetList?.map((preset) => {
            return (
              <SelectItem key={preset} value={preset}>
                {preset}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
}

export default PresetSelectMenu;
