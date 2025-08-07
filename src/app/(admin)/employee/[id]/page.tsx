import { Card, CardContent } from "@/components/ui/card";

const EmployeeDetailPage = () => {
  return (
    <div className="flex flex-col flex-1 gap-3 py-4 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h4 className="section-title">Informasi Pribadi</h4>
          <Card className="shadow-sm">
            <CardContent></CardContent>
          </Card>
        </div>
        <div className="flex flex-col">
          <h4 className="section-title">Posisi & Divisi</h4>
          <Card className="shadow-sm">
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="section-title">Riwayat Cuti</h4>
        <Card>
          <CardContent></CardContent>
        </Card>
      </div>
      <div className="flex flex-col">
        <h4 className="section-title">Rekap Absensi</h4>
        <Card className="shadow-sm">
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
