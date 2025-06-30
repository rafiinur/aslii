import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Building,
  Edit,
  Lock,
  ShieldCheck,
  Settings,
} from "lucide-react";
import { getUserProfile } from "@/features/auth/services/user.service";
import { getCompanyById } from "@/features/company/services/company.service";

const ProfilePage = async () => {
  const user = await getUserProfile();
  const company = await getCompanyById(user.profile.m_company_id);

  return (
    <div className="flex flex-1 flex-col gap-4 pt-4">
      {/* Profile Header */}
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Avatar */}
            <div className="relative group">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage
                  src={user.profile.m_user_profile_picture || ""}
                  alt={user.profile.m_user_profile_nama_lengkap}
                />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  {user.profile.m_user_profile_nama_lengkap
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-background shadow-sm"
              >
                <Edit className="h-4 w-4" />
              </Button>
            </div>

            {/* User Header Info */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-2xl font-bold">
                  {user.profile.m_user_profile_nama_lengkap}
                </CardTitle>
                {/* {user.roles.map((role) => (
                  <Badge key={role.r_role_id} variant="outline">
                    {role.r_role_nama}
                  </Badge>
                ))} */}

                <Badge variant="outline" className="bg-primary/10">
                  {/* {user.roles[0].m_divisi_nama} */}
                </Badge>
              </div>

              <div className="text-muted-foreground flex items-center gap-2">
                <Building className="h-4 w-4" />
                {company?.m_company_nama}
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {user.profile.m_user_profile_nomor_telepon}
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {user.email}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="py-6">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Information */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <div className="flex justify-between items-center">
                        <span className="text-sm" id="email">
                          {user.email}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <div className="flex justify-between items-center">
                        <span className="text-sm" id="phone">
                          {user.profile.m_user_profile_nomor_telepon}
                        </span>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                        >
                          Primary
                        </Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-sm font-medium">
                        Address
                      </Label>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm" id="address">
                          {user.profile.m_user_profile_alamat}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Company Information */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      Company Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </Label>
                      <span className="text-sm block" id="company">
                        {company?.m_company_nama}
                      </span>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="division" className="text-sm font-medium">
                        Division
                      </Label>
                      <span className="text-sm block" id="division">
                        {/* {user.roles[0].m_divisi_nama} */}
                      </span>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-sm font-medium">
                        Role
                      </Label>
                      {/* {user.roles.map((role) => (
                        <Badge key={role.r_role_id} variant="outline">
                          {role.r_role_nama}
                        </Badge>
                      ))} */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 2FA Switch */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="2fa" className="font-medium">
                        Two-factor Authentication
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch id="2fa" />
                  </div>

                  <Separator />

                  {/* Password Change */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="font-medium">Password</Label>
                      <p className="text-sm text-muted-foreground">
                        Last updated 3 months ago
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Lock className="mr-2 h-4 w-4" />
                      Change Password
                    </Button>
                  </div>

                  <Separator />

                  {/* Session Management */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="font-medium">Active Sessions</Label>
                      <p className="text-sm text-muted-foreground">
                        Manage your active login sessions
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Settings className="mr-2 h-4 w-4" />
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
