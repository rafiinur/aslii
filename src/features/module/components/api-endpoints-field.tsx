import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, X } from "lucide-react";
import { useCallback } from "react";

const HTTP_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH"];

const ENDPOINT_OPTIONS: Record<string, string[]> = {
  GET: ["/api/v1/users", "/api/v1/users/{id}", "/api/v1/products"],
  POST: ["/api/v1/users", "/api/v1/products"],
  PUT: ["/api/v1/users/{id}"],
  DELETE: ["/api/v1/users/{id}"],
  PATCH: [],
};

interface ApiEndpoint {
  method: string;
  path: string;
}

interface ApiEndpointsFieldProps {
  value: ApiEndpoint[];
  onChange: (value: ApiEndpoint[]) => void;
}

export default function ApiEndpointsField({
  value,
  onChange,
}: ApiEndpointsFieldProps) {
  const handleAdd = useCallback(() => {
    onChange([
      ...(value || []),
      { method: "GET", path: ENDPOINT_OPTIONS["GET"][0] || "" },
    ]);
  }, [value, onChange]);

  const handleMethodChange = (idx: number, method: string) => {
    const defaultPath = ENDPOINT_OPTIONS[method]?.[0] || "";
    const updated = value.map((item, i) =>
      i === idx ? { method, path: defaultPath } : item
    );
    onChange(updated);
  };

  const handlePathChange = (idx: number, path: string) => {
    const updated = value.map((item, i) =>
      i === idx ? { ...item, path } : item
    );
    onChange(updated);
  };

  const handleRemove = (idx: number) => {
    const updated = value.filter((_, i) => i !== idx);
    onChange(updated);
  };

  const getMethodColor = (method: string) => {
    const colors: Record<string, string> = {
      GET: "bg-green-100 text-green-800 border-green-200",
      POST: "bg-blue-100 text-blue-800 border-blue-200",
      PUT: "bg-orange-100 text-orange-800 border-orange-200",
      DELETE: "bg-red-100 text-red-800 border-red-200",
      PATCH: "bg-purple-100 text-purple-800 border-purple-200",
    };
    return colors[method] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="space-y-3">
      {(value || []).length === 0 && (
        <Card className="border-dashed border-2">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Belum ada endpoint yang ditambahkan. Klik tombol &ldquo;Tambah
              Endpoint&rdquo; untuk memulai.
            </p>
          </CardContent>
        </Card>
      )}

      {(value || []).map((item: ApiEndpoint, idx: number) => (
        <Card key={idx} className="hover:shadow-sm transition-shadow">
          <CardContent>
            <div className="flex gap-3 items-end">
              <div className="flex flex-col gap-2">
                <Label className="text-xs font-medium text-muted-foreground">
                  Method
                </Label>
                <Select
                  value={item.method}
                  onValueChange={(method) => handleMethodChange(idx, method)}
                >
                  <SelectTrigger
                    className={`w-24 text-sm font-medium ${getMethodColor(
                      item.method
                    )}`}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {HTTP_METHODS.map((method: string) => (
                      <SelectItem key={method} value={method}>
                        {method}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <Label className="text-xs font-medium text-muted-foreground">
                  Endpoint Path
                </Label>
                <Select
                  value={item.path}
                  onValueChange={(path) => handlePathChange(idx, path)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih endpoint" />
                  </SelectTrigger>
                  <SelectContent>
                    {(ENDPOINT_OPTIONS[item.method] || []).map((ep: string) => (
                      <SelectItem key={ep} value={ep}>
                        {ep}
                      </SelectItem>
                    ))}
                    {(ENDPOINT_OPTIONS[item.method] || []).length === 0 && (
                      <SelectItem value="" disabled>
                        Tidak ada endpoint tersedia
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleRemove(idx)}
                aria-label="Hapus endpoint"
                className="text-destructive hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full border-dashed border-2"
        onClick={handleAdd}
      >
        <Plus className="h-4 w-4 mr-2" />
        Tambah Endpoint API
      </Button>
    </div>
  );
}
