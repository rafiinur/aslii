import {
  protectedRoutes,
  publicRoutes,
  superAdminRoutes,
} from "@/constants/paths";
import { getUserProfile } from "@/features/auth/services/user.service";
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

// Helper function to create Supabase client to avoid repetition
const createSupabaseClient = (request: NextRequest, response: NextResponse) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );
};

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({ request });
  const supabase = createSupabaseClient(request, response);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  const isPublicRoute = publicRoutes.includes(pathname);
  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isSuperAdminRoute = superAdminRoutes.includes(pathname);

  const loginUrl = new URL("/login", request.url);
  const dashboardUrl = new URL("/dashboard", request.url);
  const superDashboardUrl = new URL("/super-dashboard", request.url);

  // Jika pengguna belum login dan mencoba mengakses rute yang dilindungi,
  if (!user && (isProtectedRoute || isSuperAdminRoute)) {
    return NextResponse.redirect(loginUrl);
  }

  if (user) {
    // Jika pengguna sudah login dan mencoba mengakses rute publik (spt /login) atau halaman utama,
    if (isPublicRoute || pathname === "/") {
      return NextResponse.redirect(dashboardUrl);
    }

    if (isProtectedRoute || isSuperAdminRoute) {
      const { data } = await getUserProfile();

      const isSuperAdminUser = data.profile?.m_user_profile_is_super ?? false;
      const isCompanyAdminUser =
        data.profile?.m_user_profile_is_company_admin ?? false;

      // Jika mencoba mengakses rute Super Admin tetapi bukan Super Admin,
      if (isSuperAdminRoute && !isSuperAdminUser) {
        return NextResponse.redirect(dashboardUrl);
      }

      // Jika mencoba mengakses rute yang hanya bisa diakses oleh Super Admin,
      if (isProtectedRoute && isSuperAdminUser) {
        return NextResponse.redirect(superDashboardUrl);
      }

      // Jika mencoba mengakses rute yang dilindungi (protected) tetapi tidak memiliki peran yang sesuai
      if (isProtectedRoute && !isCompanyAdminUser && !isSuperAdminUser) {
        return NextResponse.redirect(dashboardUrl);
      }
    }
  }

  return response;
}
